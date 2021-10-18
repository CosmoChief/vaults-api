// Create express app
var db = require("../database.js")
const axios = require('axios');
var moment = require("moment");
var abi = '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
var vaultAbi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Deposit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "Withdraw",
    "type": "event"
}, {
    "inputs": [],
    "name": "babydoge",
    "outputs": [{"internalType": "contract IERC20", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}, {
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "calcRewardsUser",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}],
    "name": "claimRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "key", "type": "uint256"}, {
        "internalType": "contract IERC20",
        "name": "_tokenStake",
        "type": "address"
    }, {"internalType": "contract IERC20", "name": "_tokenReward", "type": "address"}, {
        "internalType": "bool",
        "name": "_isLp",
        "type": "bool"
    }, {"internalType": "uint256", "name": "_vaultDays", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_minLockDays",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_amount", "type": "uint256"}],
    "name": "createVault",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_lockDays",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "deposit",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}, {
        "internalType": "address",
        "name": "_user",
        "type": "address"
    }],
    "name": "getUserInfo",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "key", "type": "uint256"}],
    "name": "getVaultId",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}],
    "name": "getVaultInfo",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}],
    "name": "getVaultToken",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }, {"internalType": "contract IERC20", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_taxForNonBabyDogeCoin", "type": "uint256"}],
    "name": "setTaxForNonBabyDogeCoin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "taxForNonBabyDogeCoin",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "totalDay",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "userInfo",
    "outputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "rewardTotal", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "rewardWithdraw",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "lockTime", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "lockDays",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "lastRewardDay", "type": "uint256"}, {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "vaultInfo",
    "outputs": [{"internalType": "uint256", "name": "amountReward", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "vaultTokenTax",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "startVault", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "vaultDays",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "minLockDays", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "userCount",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "usersAmount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "usersWeight",
        "type": "uint256"
    }, {"internalType": "bool", "name": "isLpVault", "type": "bool"}, {
        "internalType": "bool",
        "name": "paused",
        "type": "bool"
    }, {"internalType": "uint256", "name": "lastTotalDay", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "vaultKeys",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "vaultToken",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "tokenStake",
        "type": "address"
    }, {"internalType": "contract IERC20", "name": "tokenReward", "type": "address"}, {
        "internalType": "address",
        "name": "vaultCreator",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_vid", "type": "uint256"}],
    "name": "withdrawTax",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];
var minimalAbiToken = [{
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "type": "function"
}, {
    "type": "function",
    "name": "approve",
    "constant": false,
    "payable": false,
    "gas": 1000000,
    "inputs": [{"type": "address", "name": "spender"}, {"type": "uint256", "name": "amount"}],
    "outputs": [{"type": "bool"}]
}, {
    "type": "function",
    "name": "_maxTxAmount",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "gas": 1000000,
    "inputs": [],
    "outputs": [{"type": "uint256"}]
}];
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org:443');

function getUnit(decimals) {
    switch (decimals) {
        case 3:
            return "finney"
        case 6:
            return "szabo"
        case 9:
            return "gwei"
        case 18:
            return "ether"
    }
}

function getApr(vid, days, unitPrice, totalPrice){
    let hasDeposits = false;

    //ready vault contract get and convert user allocation

    let dailyRate = totalPrice / days;
    let annualizedYield = dailyRate * 365;
    let initialPoolAlloc = dailyRate * unitPrice;

    return annualizedYield / initialPoolAlloc * 100;
}

function calcAPR() {
    var sql = 'select * from vaults'
    var params = []
    db.all(sql, params, async (err, row) => {
        if (row) {
            for (const data of row) {
                if (data.is_lp === 'true') {
                    const contract = new ethers.Contract(data.reward_contract, abi, provider);

                    let lpSupply = await contract.totalSupply();
                    let supplyF = ethers.utils.formatUnits(lpSupply, getUnit(contract.decimals()));
                    let reserve = await contract.getReserves();
                    let decimals = await contract.decimals();
                    let token0 = await contract.token0();
                    let token1 = await contract.token1();
                    const contractToken0 = new ethers.Contract(token0, minimalAbiToken, provider);
                    const contractToken1 = new ethers.Contract(token1, minimalAbiToken, provider);
                    let decimalsToken0 = await contractToken0.decimals();
                    let decimalsToken1 = await contractToken1.decimals();
                    let reserve0 = reserve._reserve0;
                    let reserveF0 = ethers.utils.formatUnits(reserve0, getUnit(decimalsToken0));
                    let reserve1 = reserve._reserve1;
                    let reserveF1 = ethers.utils.formatUnits(reserve1, getUnit(decimalsToken1));

                    let url = "https://api.pancakeswap.info/api/v2/tokens/" + token0
                    axios.get(url)
                        .then(response => {
                            let priceToken0 = response['data'].data.price;
                            let url = "https://api.pancakeswap.info/api/v2/tokens/" + token1
                            axios.get(url)
                                .then(response => {
                                    let priceToken1 = response['data'].data.price;
                                    let valueToken0 = reserveF0 * priceToken0;
                                    let valueToken1 = reserveF1 * priceToken1;
                                    let totalSum = valueToken0 + valueToken1;
                                    let price = totalSum / supplyF;
                                    let rewards = ethers.utils.formatUnits(data.reward_amount, getUnit(decimals));
                                    let total = (rewards * price).toString();

                                    let start = moment(data.start * 1000)
                                    let end = moment(data.end * 1000)

                                    //validate with form
                                    let days = end.diff(start, 'days') + 1;
                                    let apr = getApr(data.vid, days, price, total);

                                    insertAPR(data.vid, apr);
                                })
                                .catch(error => {
                                    console.log(error.message);
                                    console.log('error getting token price from lp '+ data.contract);
                                    console.log('token0 '+ token0);
                                });
                        })
                        .catch(error => {
                            console.log(error.message);
                            console.log('error getting token price from lp '+ data.contract);
                            console.log('token1 '+ token1);
                        });


                } else {
                    let url = "https://api.pancakeswap.info/api/v2/tokens/" + data.reward_contract
                    axios.get(url)
                        .then(response => {
                            const contract = new ethers.Contract(data.reward_contract, minimalAbiToken, provider);
                            let price = response['data'].data.price;
                            let rewards = ethers.utils.formatUnits(data.reward_amount, getUnit(contract.decimals()));
                            let total = rewards * price;

                            let start = moment(data.start * 1000)
                            let end = moment(data.end * 1000)

                            //validate with form
                            let days = end.diff(start, 'days') + 1;
                            let apr = getApr(data.vid, days, price, total);

                            insertAPR(data.vid, apr);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        }
    });

}

function insertAPR(vid, total) {

    var sql = `select *
               from vaults_apr
               where vid = ?`

    console.log(total);

    var params = [moment().unix(), total, vid]

    db.get(sql, [vid], function (err, result) {
        let sql = `UPDATE vaults_apr
                   set date = ?,
                       apr  = ?
                   where vid = ?`

        if (!result) {
            sql = `INSERT INTO vaults_apr (date, apr, vid)
                   VALUES (?, ?, ?)`
        }

        db.run(sql, params, function (err, result) {});

    });
}

calcAPR();

