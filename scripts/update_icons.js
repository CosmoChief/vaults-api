// Create express app
var db = require("../database.js")
const axios = require('axios');
var fs = require('fs');
var request = require('request');
var abi = '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.binance.org:443');


function getIcons() {
    var sql = 'select * from vaults where token_icon_id = 0 '
    var params = []


    db.all(sql, params, async (err, row) => {
        if (err) {
            //res.status(500).json("Error voting.")
        }

        if (row) {
            let processedContracts = [];
            for (const data of row) {


                // remove
                switch (data.reward_contract) {
                    case '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9': //bnb
                        data.reward_contract = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                        break;
                    case '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46': //babydoge
                        data.reward_contract = '0xc748673057861a797275cd8a068abb95a902e8de';
                        break;
                    case '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068': //usdt
                        data.reward_contract = '0x55d398326f99059ff775485246999027b3197955';
                        break;
                    case '0x563d18D44660d459366785715B8cF6BbA7813474': //fakelp
                        data.reward_contract = '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0';
                        break;

                }

                switch (data.stake_contract) {
                    case '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9': //bnb
                        data.stake_contract = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                        break;
                    case '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46': //babydoge
                        data.stake_contract = '0xc748673057861a797275cd8a068abb95a902e8de';
                        break;
                    case '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068': //usdt
                        data.stake_contract = '0x55d398326f99059ff775485246999027b3197955';
                        break;
                    case '0x563d18D44660d459366785715B8cF6BbA7813474': //fakelp
                        data.stake_contract = '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0';
                        break;

                }
                //remove

                if (processedContracts.includes(data.reward_contract)) {
                    if (data.tokenImgId === 0) {
                        updateTokenImgIdForContract(data.contract);
                    }
                    console.log('already processed');
                    continue;
                }


                processedContracts.push(data.reward_contract);

                if (data.is_lp === 'true') {
                    const contract = new ethers.Contract(data.reward_contract, abi, provider);

                    let token0 = await contract.token0();
                    let token1 = await contract.token1();

                    let urlToken0 = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + token0
                    let urlToken1 = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + token1
                    let downloadImg1 = __dirname + "/icons/" + token0 + ".png";
                    let downloadImg2 = __dirname + "/icons/" + token1 + ".png";

                    await axios.get(urlToken0).then(response => {
                        const image = response.data.image.large;
                        download(image, downloadImg1, () => {
                        });
                    }).catch(error => {
                        downloadImg1 = "noimagetoken.png";
                    });

                    await axios.get(urlToken1).then(response => {
                        const image = response.data.image.large;
                        download(image, downloadImg2, () => {
                        });
                    }).catch(error => {
                        downloadImg2 = "noimagetoken.png";
                    });

                    savedProcessedLp(data.reward_contract, token0 + ".png", token1 + ".png");

                } else {

                    if (data.stake_contract === data.reward_contract) {
                        let url = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + data.reward_contract
                        axios.get(url).then(response => {
                            const image = response.data.image.large;
                            const downloadPath = __dirname + "/icons/" + data.reward_contract + ".png";
                            download(image, downloadPath, () => {
                                savedProcessedNonLp(data.stake_contract, data.reward_contract)
                            });
                        }).catch(error => {
                            const downloadPath = __dirname + "/icons/noimagetoken.png";
                            savedProcessedNonLp(data.stake_contract, data.reward_contract)
                        });
                    } else {
                        let url = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + data.reward_contract
                        axios.get(url).then(response => {
                            const image = response.data.image.large;
                            const downloadPath = __dirname + "/icons/" + data.reward_contract + ".png";
                            download(image, downloadPath, () => {
                                savedProcessedNonLp(data.stake_contract, data.reward_contract)
                                let url = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + data.stake_contract
                                axios.get(url).then(response => {
                                    const image = response.data.image.large;
                                    const downloadPath = __dirname + "/icons/" + data.stake_contract + ".png";
                                    download(image, downloadPath, () => {
                                        savedProcessedNonLp(data.stake_contract, data.reward_contract)
                                    });
                                }).catch(error => {
                                    savedProcessedNonLp(data.stake_contract, data.reward_contract)
                                });

                            });
                        }).catch(error => {
                            savedProcessedNonLp(data.stake_contract, data.reward_contract)
                        });
                    }
                }
            }
        }
    });

}

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

function savedProcessedLp(contract, name) {

    // remove
    switch (contract) {
        case '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': //bnb
            contract = '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9';
            break;
        case '0xc748673057861a797275cd8a068abb95a902e8de': //babydoge
            contract = '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46';
            break;
        case '0x55d398326f99059ff775485246999027b3197955': //usdt
            contract = '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068';
            break;
        case '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0': //fakelp
            contract = '0x563d18D44660d459366785715B8cF6BbA7813474';
            break;

    }
    //remove

    var sql = `select id
               from token_icons
               where contract = ?`

    var params = [
        contract,
    ]

    db.get(sql, params, function (err, result) {
        if (!result) {
            var sql = `INSERT INTO token_icons (contract,
                                                img_main,
                                                img_second)
                       VALUES (?, ?, ?)`

            var params = [
                contract,
                imgMain,
                imgSecond,
            ]

            db.run(sql, params, function (err, result) {
                updateTokenImgIdForContract(contract)
            });
        }
    });
}

function savedProcessedNonLp(stake_contract, reward_contract) {

    // remove
    switch (stake_contract) {
        case '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': //bnb
            stake_contract = '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9';
            break;
        case '0xc748673057861a797275cd8a068abb95a902e8de': //babydoge
            stake_contract = '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46';
            break;
        case '0x55d398326f99059ff775485246999027b3197955': //usdt
            stake_contract = '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068';
            break;
        case '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0': //fakelp
            stake_contract = '0x563d18D44660d459366785715B8cF6BbA7813474';
            break;

    }

    switch (reward_contract) {
        case '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': //bnb
            reward_contract = '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9';
            break;
        case '0xc748673057861a797275cd8a068abb95a902e8de': //babydoge
            reward_contract = '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46';
            break;
        case '0x55d398326f99059ff775485246999027b3197955': //usdt
            reward_contract = '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068';
            break;
        case '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0': //fakelp
            reward_contract = '0x563d18D44660d459366785715B8cF6BbA7813474';
            break;

    }
    //remove
    let params = [];
    let sql = null;

    if (stake_contract === reward_contract) {
        sql = `select id
               from token_icons
               where contract = ?`

        params = [
            stake_contract,
        ]

        db.get(sql, params, function (err, result) {
            if (result === undefined) {
                var sql = `INSERT INTO token_icons (contract, img_main)
                           VALUES (?, ?)`

                var params = [
                    stake_contract,
                    name
                ]

                db.run(sql, params, function (err, result) {
                    updateTokenImgIdForContract(stake_contract)
                });
            }
        });
    } else {
        sql = `select id
               from token_icons
               where img_main = ?
                 and img_second = ?`

        params = [
            reward_contract + ".png",
            stake_contract + ".png",
        ]

        db.get(sql, params, function (err, result) {
            if (result === undefined) {
                var sql = `INSERT INTO token_icons (contract, img_main, img_second)
                           VALUES (?, ?, ?)`

                params = [
                    stake_contract,
                    reward_contract + ".png",
                    stake_contract + ".png",
                ]

                db.run(sql, params, function (err, result) {
                    updateTokenImgIdForContractWithDifferentRewards(stake_contract, reward_contract)
                });
            }
        });
    }
}

function updateTokenImgIdForContractWithDifferentRewards(stake_contract, reward_contract) {
    let sql = `select id
               from token_icons
               where img_main = ?
                 and img_second = ?`

     let params = [
        reward_contract + ".png",
        stake_contract + ".png",
    ]

    db.get(sql, params, function (err, result) {

        var sql = `update vaults
                   set token_icon_id = ?
                   where reward_contract = ? and stake_contract = ?`

        if (result) {
            var params = [
                result.id,
                reward_contract,
                stake_contract,
            ]

            db.run(sql, params, function (err, result) {
            });
        }
    });
}
function updateTokenImgIdForContract(contract) {
    var sql = `select id
               from token_icons
               where contract = ?`

    var params = [
        contract,
    ]


    db.get(sql, params, function (err, result) {

        var sql = `update vaults
                   set token_icon_id = ?
                   where reward_contract = ?`

        if (result) {
            var params = [
                result.id,
                contract,
            ]

            db.run(sql, params, function (err, result) {
            });
        }
    });
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}


getIcons();