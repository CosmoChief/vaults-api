// Create express app
var express = require("express")
var db = require("./database.js")
var ethers = require('ethers')
var app = express()
var md5 = require("md5")
var crypto = require("crypto");
var moment = require("moment");
var bodyParser = require("body-parser");
var userAddress = null;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var HTTP_PORT = 8033
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.post("/api/bind", async (req, res, next) => {

    if (!validateAddress(res, req.body.address)) {
        return false;
    }

    userAddress = req.body.address.toLowerCase();

    createUser(function (err, row) {
        if (err) {
            console.error(err.message);
        }
        if (row) {
            res.status(500).json({
                "message": "Error",
                "data": "Already binded."
            });
        } else {
            addUser(
                res,
                crypto.randomBytes(13).toString('hex'),
                userAddress
            )
        }
    });
});


var createUser = function (callback) {
    var sql = "select * from users where address = ?"
    var params = [userAddress]
    var data = null;
    db.get(sql, params, (err, row) => {
        callback(err, row);
    });
};

function addVault(res, data) {
    var sql = `INSERT INTO vaults (
                       id,
                       name,
                       isLp,
                       contract,
                       start,
                       [end],
                       locktime,
                       reward_amount
                   )
                   VALUES (?,?,?,?,?,?,?,?)`



    var params = [
        data.id,
        data.name,
        data.isLp,
        data.contract,
        data.start,
        data.end,
        data.locktime,
        data.reward,
    ]

    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(500).json("error creating vault")
            return;
        }

        res.json({
            "message": "success",
            "data": "created."
        });
    });
}

function addUser(res, id, address) {
    var sql = 'INSERT INTO users (id, address, created_at) VALUES (?,?,?)'
    var params = [id, address, moment().unix()]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(500).json({"error binding user": err.message})
            return;
        }

        res.json({
            "message": "success",
            "data": "binded."
        });
    });
}

function validateAddress(res, address) {
    try {
        ethers.utils.getAddress(address);
        return true;
    } catch (error) {
        res.json({
            "message": "error",
            "data": "Invalid address."
        })
        return false;
    }
}


app.post("/api/vault", (req, res, next) => {
    data = {
        id: req.body.id,
        isLp: req.body.isLp,
        icon: req.body.icon,
        contract: req.body.contract,
        start: req.body.start,
        end: req.body.end,
        locktime: req.body.locktime,
        name: req.body.name,
        reward: req.body.reward_amount,
    }

    let errors = validateVaultPost(data);


    if (typeof errors !== 'undefined' && errors.length > 0) {
        res.status(500).json({
            "message": "error",
            "data": errors.join(', ')
        })
        return false
    }

    if (!ethers.utils.isAddress(req.body.contract)) {
        res.status(500).json({
            "message": "error",
            "data": "Invalid Contract"
        })
    }

    addVault(res, data);
});

function validateVaultPost(postData) {

    let errors = [];

    if (postData.isLp !== "true" && postData.isLp !== "false") {
        errors.push(["Vault id must be informed"]);
    }

    if (postData.isLp !== "true" && postData.isLp !== "false") {
        errors.push(["IsLp must be informed"]);
    }

    /*
    if(postData.icon) {
        errors.push(["IsLp must be informed"]);
    }
    */

    if (postData.contract == null) {
        errors.push(["Contract must be informed"]);
    }


    if (postData.start == null || postData.end == null) {
        errors.push(["Dates must be informed"]);
    }

    var dateStart = moment.unix(postData.start);
    var dateEnd = moment.unix(postData.end);

    if (!dateStart.isValid() || !dateEnd.isValid()) {
        errors.push(["Dates are invalid"]);
    }


    if (dateStart >= dateEnd) {
        errors.push(["Start date must be smaller then end date"]);
    }

    if (!validateNumber(data.locktime)) {
        errors.push(["Invalid lock time"]);
    }

    if (!validateNumber(data.reward)) {
        errors.push(["Invalid rewards"]);
    }

    if (data.name == null) {
        errors.push(["Invalid name"]);
    }


    return errors;
}

function validateNumber(number) {
    var n = Math.floor(Number(number));
    return n !== Infinity && String(n) === number && n >= 0;
}

app.get("/api/vaults", (req, res, next) => {
    var sql =`SELECT v.*,
       COUNT(uv.id) AS votes 
  FROM vaults as v
       LEFT JOIN users_votes as uv
       ON v.id = uv.vid
 GROUP BY v.id 
 ORDER BY votes DESC;`

    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.post("/api/vault/pin/:id", (req, res, next) => {

    const status = parseInt(req.body.status);

    if(status !== 1 && status !== 0) {
        res.status(500).json({
            message: "Error",
            data: "Invalid pin status.",
        })
        return false;
    }

    const params = [
        status,
        req.params.id,
    ]

    db.run('UPDATE vaults set pinned = ? WHERE id = ?', params, (err, result) => {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                message: "success",
            })
    });

});



app.post("/api/vault/vote/:id", (req, res, next) => {

        if (!validateAddress(res, req.body.address)) {
            return false;
        }

        const userAddress = req.body.address.toLowerCase();

        const voteOption = 1;

        var sql = 'select * from users where address = ? '
        var params = [userAddress]
        db.get(sql, params, (err, row) => {
            if (err) {
                res.status(500).json("Error voting.")
            }else {
                if(row) {
                    validateVoteVault(res, req.params.id, voteOption, row.id);
                }else{
                    res.status(500).json("Error voting.")
                }
            }
        });
});

function validateVoteVault(res, vaultId, voteOption, userId) {
    var sql = "select * from vaults where id = ?"
    var params = [vaultId]
    db.get(sql, params, (err, row) => {
        if (!row) {
            res.status(500).json("Vault not found.");
        } else {
            validateUserVote(res, vaultId, voteOption, userId)
        }
    });
}

function validateUserVote(res, vaultId, voteOption, userId) {

    var sql = "select * from users_votes where uid = ? " +
        "and DATETIME(date, 'unixepoch') >= datetime('now','-24 hours')";

    var params = [userId]
    db.get(sql, params, (err, row) => {
        if (row) {
            res.status(500).json("Already voted, please wait 24 hours to vote again.");
            return;
        } else {
            insertVote(res, vaultId, voteOption, userId)
        }
    });
}

function insertVote(res, vaultId, voteOption, userId) {
    var voteDate = moment().unix()

    var sql = `INSERT INTO users_votes (
                       date,
                       uid,
                       vid
                   )
                   VALUES (?,?,?)`

    var params = [
        voteDate,
        userId,
        vaultId,
    ]

    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(500).json("Error user voting.")
            return;
        }

        res.json({
            "message": "success",
            "data": "voted."
        });
    });
}

app.post("/api/vault/close", (req, res, next) => {
    //close vault
    res.json({
        "message": "success",
        "data": "vaults"
    })
});




app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});
app.use(function (req, res) {
    res.status(404);
});














