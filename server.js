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
var cors = require('cors');
var bigInt = require("big-integer");
var sanitizer = require('sanitizer');
const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');

const minABI = [
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{name: "", type: "string"}],
        type: "function",
    },
];

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(bodyParser.json());

var HTTP_PORT = 8031

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

var createUser = function (callback) {
    var sql = "select * from users where address = ?"
    var params = [userAddress]
    var data = null;
    db.get(sql, params, (err, row) => {
        callback(err, row);
    });
};

async function getContractNames(stake, reward) {
    let name
    if (stake === reward) {
        const contractStake = new ethers.Contract(stake, minABI, provider);
        name = await contractStake.symbol();
    } else {
        const contractStake = new ethers.Contract(stake, abi, provider);
        const contractReward = new ethers.Contract(reward, abi, provider);
        let nameStake = await contractStake.symbol();
        let nameReward = await contractReward.symbol();
        name = nameStake + " / " + nameReward;
    }

    return name;
}

async function addVault(res, data) {
    var sql = `INSERT INTO vaults
               (vid, name, is_lp, stake_contract, reward_contract, start, [ end], reward_amount)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

    let start = moment().unix();
    let end = moment().add(data.days, 'days').unix();
    console.log(end);
    data.name = await getContractNames(data.stake_contract, data.reward_contract);

    var params = [
        data.vid,
        data.name,
        data.is_lp,
        data.stake_contract,
        data.reward_contract,
        start,
        end,
        data.reward,
    ]

    db.run(sql, params, function (err, result) {
        if (err) {
            console.log(err.message)
            //res.status(500).json("error creating vault")
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
    var params = [
        sanitizer.sanitize(id),
        sanitizer.sanitize(address),
        moment().unix()
    ]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(500).json({
                "error binding user": err.message
            })
            return;
        }

        res.json({
            "message": "success",
            "data": "binded."
        });
    });
}

function addVote(res, vaultId, voteOption, userId) {
    var voteDate = moment().unix()

    var sql = `INSERT INTO users_votes (date,
                                        uid,
                                        vid)
               VALUES (?, ?, ?)`

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

function validateAddress(res, address) {
    try {
        ethers.utils.getAddress(address);
        return true;
    } catch (error) {
        res.status(500).json({
            "message": "error",
            "data": "Invalid address."
        })
        return false;
    }
}

function validateVaultPost(postData) {
    let errors = [];

    if (postData.vid == null) {
        errors.push(["Invalid vid"]);
    }

    if (postData.is_lp !== "true" && postData.is_lp !== "false") {
        errors.push(["Vault id must be informed"]);
    }

    if (postData.stake_contract == null) {
        errors.push(["Contract must be informed"]);
    }

    if (postData.reward_contract == null) {
        errors.push(["Contract must be informed"]);
    }

    if (postData.days == null || !validateNumber(postData.days)) {
        errors.push(["Days must be informed"]);
    } else {
        let number = parseInt(postData.days);
        if (!(number >= 1 && number <= 365)) {
            errors.push(["Dates not allows"]);
        }
    }

    if (!validateBigNumber(data.reward)) {
        errors.push(["Invalid rewards"]);
    }

    return errors;
}

function validateNumber(number) {
    var n = Math.floor(Number(number));
    return n !== Infinity && String(n) === number && n >= 0;
}

function validateBigNumber(number) {
    let data = BigInt(number);

    if (data.toString() === "0") {
        return false;
    }

    return true;
}

function validateVoteVault(res, vaultId, voteOption, userId) {
    var sql = "select * from vaults where vid = ?"
    var params = [vaultId]
    db.get(sql, params, (err, row) => {
        if (!row) {
            res.status(500).json({
                "message": "error",
                "data": "Vault not found."
            })
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
            res.status(500).json({
                "message": "error",
                "data": "Already voted, please wait 24 hours to vote again."
            })
        } else {
            addVote(res, vaultId, voteOption, userId)
        }
    });
}

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

app.post("/api/vault", (req, res, next) => {

    data = {
        vid: sanitizer.sanitize(req.body.vid),
        is_lp: sanitizer.sanitize(req.body.is_lp),
        stake_contract: sanitizer.sanitize(req.body.stake_contract),
        reward_contract: sanitizer.sanitize(req.body.reward_contract),
        days: sanitizer.sanitize(req.body.days),
        reward: sanitizer.sanitize(req.body.reward_amount),
    }

    let errors = validateVaultPost(data);

    if (typeof errors !== 'undefined' && errors.length > 0) {
        res.status(500).json({
            "message": "error",
            "data": errors.join(', ')
        })
        return false
    }

    if (!ethers.utils.isAddress(req.body.stake_contract)) {
        res.status(500).json({
            "message": "error",
            "data": "Invalid Stake Contract"
        })
    }

    if (!ethers.utils.isAddress(req.body.reward_contract)) {
        res.status(500).json({
            "message": "error",
            "data": "Invalid Reward Contract"
        })
    }

    addVault(res, data);
});

app.get("/api/tvl", (req, res, next) => {
    var sql = `select sum(usd_rewards_value) as total
               from vaults_rewards_value;`

    var params = []
    db.get(sql, params, (err, data) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }
        res.json({
            "message": "success",
            "data": data.total
        })
    });
});


app.get("/api/vaults/pinned", (req, res, next) => {
    var sql = `SELECT v.*,
                      COUNT(uv.id) AS votes,
                      vrv.usd_rewards_value
               FROM vaults as v
                        LEFT JOIN users_votes as uv
                                  ON v.vid = uv.vid
                        LEFT JOIN vaults_rewards_value as vrv
                                  ON v.vid = vrv.vid
               WHERE v.pinned = 1
               GROUP BY v.id
               order by v.id desc`

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});


app.post("/api/vaults", (req, res, next) => {

    let sortRule = sanitizer.sanitize(req.body.sort);
    let search = sanitizer.sanitize(req.body.search);
    let closed = sanitizer.sanitize(req.body.closed);
    let queryParam = [];

    if (closed === undefined) {
        closed = false
    }

    if (sortRule === undefined) {
        sortRule = 'new_to_old'
    }

    if (search !== undefined) {
        queryParam = [search]
    }

    const rules = [
        'new_to_old',
        'end_date',
        'most_votes',
        'most_votes_today',
        'most_votes_7_days',
        'rewards',
    ];

    if (!rules.includes(sortRule)) {
        res.status(400).json({
            "error": 'Invalid sort rule'
        });
        return;
    }

    let sql = prepareQuery(sortRule, search, closed)

    const querySort = {
        "most_votes_today": "1",
        "most_votes_7_days": "7",
    }

    if (sortRule === "most_votes_today" || sortRule === "most_votes_7_days") {
        queryParam.unshift("-" + querySort[sortRule] + " days");
    }

    db.all(sql, queryParam, (err, rows) => {
        console.log(err);
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

function prepareQuery(sortRule, search, closed) {

    const querySort = {
        "new_to_old": "ORDER BY ID DESC;",
        "end_date": "ORDER BY [end] DESC;",
        "most_votes": "ORDER BY votes DESC;",
        "most_votes_today": "ORDER BY votes DESC;",
        "most_votes_7_days": "ORDER BY votes DESC;",
        "rewards": "ORDER BY CAST(usd_rewards_value as INTERGER) DESC;",
    }

    const selector = "SELECT v.*, COUNT(uv.id) AS votes, vrv.usd_rewards_value FROM vaults as v"

    var userVoteJoin = " LEFT JOIN users_votes as uv ON v.vid = uv.vid"

    if (!closed && (sortRule === "most_votes_today" || sortRule === "most_votes_7_days")) {
        userVoteJoin = " LEFT JOIN users_votes as uv ON v.vid = uv.vid"
            + " and DATETIME(uv.date, 'unixepoch') >= datetime('now', ?)"
    }

    const vaultRewardsJoin = " LEFT JOIN vaults_rewards_value as vrv ON v.vid = vrv.vid"

    let where = " where pinned = 0"

    if (search !== undefined) {
        where = where + " and name like '%' || ? || '%'"
    }

    if (closed) {
        where = where + " and DATETIME(v.end, 'unixepoch') < datetime('now')"
    }

    const groupBy = " GROUP BY v.vid "

    let sortBy = querySort[sortRule]

    return selector + userVoteJoin + vaultRewardsJoin + where + groupBy + sortBy;

}


app.post("/api/vault/pin/:id", (req, res, next) => {

    //random key

    const status = parseInt(req.body.status);

    if (status !== 1 && status !== 0) {
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

    db.run('UPDATE vaults set pinned = ? WHERE vid = ?', params, (err, result) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            })
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
            res.status(500).json({
                "message": "error",
                "data": "Error voting."
            })
        } else {
            if (row) {
                validateVoteVault(res, req.params.id, voteOption, row.id);
            } else {
                res.status(500).json({
                    "message": "error",
                    "data": "Error voting."
                })
            }
        }
    });
});

app.post("/api/vault/close", (req, res, next) => {
    //close vault
    res.json({
        "message": "success",
        "data": "vaults"
    })
});

app.get("/", (req, res, next) => {
    res.json({
        "message": "Ok"
    })
});

app.use(function (req, res) {
    res.status(404);
});