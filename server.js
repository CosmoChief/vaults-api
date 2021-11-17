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
const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
var abi = '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'

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
    var params = [sanitizer.sanitize(userAddress.toLowerCase())]
    var data = null;
    db.get(sql, params, (err, row) => {
        callback(err, row);
    });
};

async function getContractNames(stake, reward) {
    let name;
    let stakeContractIsLP;
    let rewardContractIsLP;

    const contractStake = new ethers.Contract(stake, abi, provider);
    const contractReward = new ethers.Contract(reward, abi, provider);

    try {
        await contractStake.token0();
        stakeContractIsLP = true;
    } catch (e) {
        stakeContractIsLP = false;
    }

    try {
        await contractReward.token0();
        rewardContractIsLP = true;
    } catch (e) {
        rewardContractIsLP = false;
    }

    try {
        if (!stakeContractIsLP && !rewardContractIsLP) {
            name = "Stake " + await contractStake.symbol() + " Earn " + await contractReward.symbol()
        } else if (stakeContractIsLP && rewardContractIsLP) {
            let nameToken0Stake = await contractStake.token0()
            let nameToken1Stake = await contractStake.token1()
            let contractTokenStake0 = new ethers.Contract(nameToken0Stake, abi, provider);
            let contractTokenStake1 = new ethers.Contract(nameToken1Stake, abi, provider);
            let nameToken0Reward = await contractReward.token0()
            let nameToken1Reward = await contractReward.token1()
            let contractTokenReward0 = new ethers.Contract(nameToken0Reward, abi, provider);
            let contractTokenReward1 = new ethers.Contract(nameToken1Reward, abi, provider);

            let namePartOne = await contractTokenStake0.symbol() + "/" + await contractTokenStake1.symbol()
            let namePartTwo = await contractTokenReward0.symbol() + "/" + await contractTokenReward1.symbol()

            name = "Stake " + namePartOne + " LP Earn " + namePartTwo + " LP "

        } else if (stakeContractIsLP) {
            let nameToken0Stake = await contractStake.token0()
            let nameToken1Stake = await contractStake.token1()
            let contractTokenStake0 = new ethers.Contract(nameToken0Stake, abi, provider);
            let contractTokenStake1 = new ethers.Contract(nameToken1Stake, abi, provider);
            let namePartOne = await contractTokenStake0.symbol() + "/" + await contractTokenStake1.symbol()

            name = "Stake " + namePartOne + " LP Earn " + await contractReward.symbol()
        } else {
            let nameToken0Reward = await contractReward.token0()
            let nameToken1Reward = await contractReward.token1()
            let contractTokenReward0 = new ethers.Contract(nameToken0Reward, abi, provider);
            let contractTokenReward1 = new ethers.Contract(nameToken1Reward, abi, provider);
            let namePartTwo = await contractTokenReward0.symbol() + "/" + await contractTokenReward1.symbol()

            name = "Stake " + await contractStake.symbol() + " Earn " + namePartTwo + " LP"
        }
    } catch (e) {
        console.log(e.message)
        name = 'NOTF'
    }

    return name;
}

async function addVault(res, data) {
    var sql = `INSERT INTO vaults
               (vid, name, is_lp, stake_contract, reward_contract, start, [end], reward_amount, active)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

    let start = moment().unix();
    let end = moment().add(data.days, 'days').unix();
    data.name = await getContractNames(data.stake_contract, data.reward_contract);

    var params = [
        sanitizer.sanitize(data.vid),
        sanitizer.sanitize(data.name),
        sanitizer.sanitize(data.is_lp),
        sanitizer.sanitize(data.stake_contract.toLowerCase()),
        sanitizer.sanitize(data.reward_contract.toLowerCase()),
        sanitizer.sanitize(start),
        sanitizer.sanitize(end),
        sanitizer.sanitize(data.reward),
        1
    ]

    db.run(sql, params, function (err, result) {
        if (err) {
            res.json({
                "message": "error",
                "data": "Couldn't create Vault"
            });
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
        sanitizer.sanitize(voteDate),
        sanitizer.sanitize(userId),
        sanitizer.sanitize(vaultId),
    ]

    db.run(sql, params, function (err, result) {
        if (err) {
            console.log(err.message)
            res.status(500).json("Error user voting.")
            return;
        }

        res.json({
            "message": "success",
            "data": "Success! You can vote again in 24 hours."
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

    if (postData.is_lp !== "true" && postData.is_lp !== "false" && postData.is_lp !== false) {
        errors.push(["Is lp invalid"]);
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
    var params = [sanitizer.sanitize(vaultId)]
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

    var params = [sanitizer.sanitize(userId)]
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
            res.status(200).json({
                "message": "success",
                "data": "binded."
            });
        } else {
            addUser(
                res,
                crypto.randomBytes(13).toString('hex'),
                userAddress.toLowerCase()
            )
        }
    });
});

app.post("/api/vault/stake/:id", async (req, res, next) => {

    let vid = sanitizer.sanitize(req.params.id);
    let userAddress = sanitizer.sanitize(req.body.address);


    var sql = 'select * from users where address = ? '
    var params = [sanitizer.sanitize(userAddress.toLowerCase())]
    db.get(sql, params, (err, userRow) => {
        if (err) {
            res.status(500).json({
                "message": "error",
                "data": "Error staking."
            })
        } else {
            if (userRow !== undefined) {
                getStakedVaults(vid, userRow.id, function (err, row) {
                    console.log(row);
                    console.log(err);
                    if (err) {
                        console.error(err.message);
                    }
                    if (row) {
                        res.status(200).json({
                            "message": "success",
                            "data": "staked."
                        });
                    } else {
                        addUserToStake(
                            vid,
                            userRow.id,
                            res
                        )
                    }
                });
            } else {
                res.status(200).json({
                    "message": "error",
                    "data": "error staking."
                });
            }
        }
    });
});

var getStakedVaults = function (vid, uid, callback) {
    var sql = "select * from vault_users where vid = ? and uid = ?"
    var params = [sanitizer.sanitize(vid), sanitizer.sanitize(uid)]
    db.get(sql, params, (err, row) => {
        callback(err, row);
    });
};

function addUserToStake(vid, uid, res) {
    var sql = 'INSERT INTO vault_users (vid, uid) VALUES (?,?)'
    var params = [
        sanitizer.sanitize(vid),
        sanitizer.sanitize(uid),
    ]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(500).json({
                "error staking user": err.message
            })
            return;
        }

        res.json({
            "message": "success",
            "data": "staked."
        });
    });
}


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


app.get("/api/updater", (req, res, next) => {
    var sql = `select va.vid, va.apr, vrv.usd_rewards_value
               from vaults_apr va
                        join vaults_rewards_value vrv on va.vid = vrv.vid;`

    var params = []
    db.all(sql, params, (err, data) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }

        res.json({
            "message": "success",
            "data": data
        })
    });
});


app.get("/api/vaults/pinned", (req, res, next) => {
    var sql = `SELECT v.*,
                      COUNT(uv.id) AS votes,
                      vrv.usd_rewards_value,
                      vpr.apr,
                      icon.stake_image_main,
                      icon.stake_image_lp_image,
                      icon.reward_image_main,
                      icon.reward_image_lp_image
               FROM vaults as v
                        LEFT JOIN users_votes as uv
                                  ON v.vid = uv.vid
                        LEFT JOIN vaults_rewards_value as vrv
                                  ON v.vid = vrv.vid
                        LEFT JOIN vaults_apr as vpr
                                  ON v.vid = vpr.vid
                        LEFT JOIN token_icons as icon
                                  ON icon.stake_contract = v.stake_contract and icon.reward_contract = v.reward_contract
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
    let staked = sanitizer.sanitize(req.body.staked);
    let address = sanitizer.sanitize(req.body.address);
    let closed = sanitizer.sanitize(req.body.closed);
    let isLp = sanitizer.sanitize(req.body.isLp);
    let queryParam = [];


    if (isLp === undefined || isLp === false) {
        isLp = 'false'
    }

    if (closed === undefined || closed === 'false') {
        closed = false
    }

    if (sortRule === undefined || sortRule === '') {
        sortRule = 'new_to_old'
    }

    if (search !== undefined) {
        if (search.trim().length > 0) {
            queryParam = [search]
        }
    }

    const rules = [
        'new_to_old',
        'end_date',
        'most_votes',
        'most_votes_today',
        'most_votes_7_days',
        'rewards',
        'sort_apr',
    ];

    if (!rules.includes(sortRule)) {
        res.status(400).json({
            "error": 'Invalid sort rule'
        });
        return;
    }

    let sql = prepareQuery(sortRule, search, closed, isLp, staked)

    const querySort = {
        "most_votes_today": "1",
        "most_votes_7_days": "7",
    }

    if (sortRule === "most_votes_today" || sortRule === "most_votes_7_days") {
        queryParam.unshift("-" + querySort[sortRule] + " days");
    }


    if (staked) {
        queryParam.push(address)
    }

    db.all(sql, queryParam, (err, rows) => {
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

function prepareQuery(sortRule, search, closed, isLp = false, staked = false) {

    const querySort = {
        "new_to_old": "ORDER BY ID DESC;",
        "sort_apr": "ORDER BY apr DESC;",
        "end_date": "ORDER BY [end] DESC;",
        "most_votes": "ORDER BY votes DESC;",
        "most_votes_today": "ORDER BY votes DESC;",
        "most_votes_7_days": "ORDER BY votes DESC;",
        "rewards": "ORDER BY CAST(usd_rewards_value as INTERGER) DESC;",
    }

    let selector = "SELECT v.*, COUNT(uv.id) AS votes, vrv.usd_rewards_value, icon.stake_image_main, icon.stake_image_lp_image,  icon.reward_image_main, icon.reward_image_lp_image, apr FROM vaults as v"

    if (staked === 'true') {
        selector = selector + " JOIN vault_users as uvs on uvs.vid = v.vid " +
            "JOIN users as u on u.id = uvs.uid"
    }

    var userVoteJoin = " LEFT JOIN users_votes as uv ON v.vid = uv.vid"

    if (!closed && (sortRule === "most_votes_today" || sortRule === "most_votes_7_days")) {
        userVoteJoin = " LEFT JOIN users_votes as uv ON v.vid = uv.vid"
            + " and DATETIME(uv.date, 'unixepoch') >= datetime('now', ?)"
    }

    const vaultRewardsJoin = " LEFT JOIN vaults_rewards_value as vrv ON v.vid = vrv.vid"
    let vaultAPRJoin = " LEFT JOIN vaults_apr as vpr ON v.vid = vpr.vid"
    let vaultIconJoin = " LEFT JOIN token_icons as icon ON icon.stake_contract = v.stake_contract and icon.reward_contract = v.reward_contract"


    let where = " where pinned = 0"

    if (isLp === 'false') {
        where = where + " and is_lp = 'false'"
    } else {
        where = where + " and is_lp = 'true'"
    }

    if (typeof search !== 'undefined' && search) {
        where = where + " and name like '%' || ? || '%'"
    }

    if (closed) {
        where = where + " and DATETIME(v.end, 'unixepoch') < datetime('now')"
    }

    if (staked) {
        where = where + " and u.address = ?"
    }

    const groupBy = " GROUP BY v.vid "

    let sortBy = querySort[sortRule]

    return selector +
        userVoteJoin +
        vaultRewardsJoin +
        vaultAPRJoin +
        vaultIconJoin +
        where +
        groupBy +
        sortBy;

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
        sanitizer.sanitize(status),
        sanitizer.sanitize(req.params.id),
    ]

    db.run('UPDATE vaults set pinned = ? WHERE vid = ?', params, (err, result) => {
        if (err) {
            res.status(400).json({
                "message": "error",
                "data": err.message
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
    var params = [sanitizer.sanitize(userAddress.toLowerCase())]
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