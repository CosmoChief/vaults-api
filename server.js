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
                       name,
                       isLp,
                       contract,
                       start,
                       [end],
                       locktime,
                       reward_amount
                   )
                   VALUES (?,?,?,?,?,?,?)`


    var params = [
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
            res.status(500).json({"error creating vault": err.message})
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


    //validate contract address

    //console.log(data);

    //create vault

    addVault(res, data);

});

function validateVaultPost(postData) {

    let errors = [];

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
    res.json({
        "message": "success",
        "data": "vaults"
    })
});

app.post("/api/vault/pin", (req, res, next) => {
    //pin tab
    res.json({
        "message": "success",
        "data": "vaults"
    })
});

app.post("/api/vault/close", (req, res, next) => {
    //close vault
    res.json({
        "message": "success",
        "data": "vaults"
    })
});


app.get("/api/vault/like", (req, res, next) => {
    res.json({
        "message": "success",
        "data": "like"
    })
});

app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});
app.use(function (req, res) {
    res.status(404);
});














