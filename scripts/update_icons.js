// Create express app
var db = require("../database.js")
const axios = require('axios');
var fs = require('fs');
var request = require('request');
var abi = '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');


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

                processedContracts.push(data.reward_contract);
                if (data.is_lp === 'true') {
                    if (data.stake_contract === data.reward_contract) {
                        try {
                            let token0 = await stakeContract.token0();
                            let token1 = await stakeContract.token1();
                            let stakeImages = await downloadImage(rewardContract.address)

                            addIcons(true, data.stake_contract, data.reward_contract, stakeImages)

                        } catch (e) {
                            return false;
                        }
                    } else {

                        let stakeContractIsLP = false;
                        let rewardContractIsLP = false;


                        const stakeContract = new ethers.Contract(
                            ethers.utils.getAddress(data.stake_contract),
                            abi,
                            provider
                        );

                        const rewardContract = new ethers.Contract(
                            ethers.utils.getAddress(data.reward_contract),
                            abi,
                            provider
                        );

                        try {
                            await stakeContract.token0();
                            stakeContractIsLP = true;
                        } catch (e) {
                            stakeContractIsLP = false;
                        }

                        try {
                            await rewardContract.token0();
                            rewardContractIsLP = true;
                        } catch (e) {
                            rewardContractIsLP = false;
                        }

                        let stakeImages = [];
                        let rewardImages = [];
                        if (stakeContractIsLP && rewardContractIsLP) {
                            const stakeToken0 = await stakeContract.token0();
                            const stakeToken1 = await stakeContract.token1();
                            const rewardToken0 = await rewardContract.token0();
                            const rewardToken1 = await rewardContract.token1();
                            console.log('download both LP');
                            stakeImages = await downloadLPimage(stakeToken0, stakeToken1)
                            rewardImages = await downloadLPimage(rewardToken0, rewardToken1)
                        } else if (stakeContractIsLP) {
                            const stakeToken0 = await stakeContract.token0();
                            const stakeToken1 = await stakeContract.token1();
                            console.log('download stake LP');
                            stakeImages = await downloadLPimage(stakeToken0, stakeToken1)
                            rewardImages = await downloadImage(rewardContract.address)
                        } else {
                            const rewardToken0 = await rewardContract.token0();
                            const rewardToken1 = await rewardContract.token1();
                            console.log('download reward LP');
                            stakeImages = await downloadImage(stakeContract.address)
                            rewardImages = await downloadLPimage(rewardToken0, rewardToken1)
                        }

                        addIcons(true, data.stake_contract, data.reward_contract, stakeImages, rewardImages)
                    }
                } else {

                    // remove
                    switch (data.stake_contract) {
                        case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                            data.stake_contract = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                            break;
                        case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                            data.stake_contract = '0xc748673057861a797275cd8a068abb95a902e8de';
                            break;
                        case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                            data.stake_contract = '0x55d398326f99059ff775485246999027b3197955';
                            break;
                    }
                    switch (data.reward_contract) {
                        case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                            data.reward_contract = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                            break;
                        case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                            data.reward_contract = '0xc748673057861a797275cd8a068abb95a902e8de';
                            break;
                        case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                            data.reward_contract = '0x55d398326f99059ff775485246999027b3197955';
                            break;
                    }

                    // remove
                    let stakeImages = [];
                    let rewardImages = [];
                    if (data.stake_contract === data.reward_contract) {
                        stakeImages = await downloadImage(data.stake_contract)
                        rewardImages = stakeImages
                    } else {
                        stakeImages = await downloadImage(data.stake_contract)
                        rewardImages = await downloadImage(data.reward_contract)
                    }

                    addIcons(false, data.stake_contract, data.reward_contract, stakeImages, rewardImages)
                }
            }
        }
    });
}

function addIcons(isLp = false, stake_contract, reward_contract, stakeImages, rewardImages = false) {
    stake_contract = stake_contract.toLowerCase()
    reward_contract = reward_contract.toLowerCase()

    // remove
    switch (stake_contract) {
        case '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': //bnb
            stake_contract = '0x04c7393e4cc11fe9177aca68594aef72a40166d9';
            break;
        case '0xc748673057861a797275cd8a068abb95a902e8de': //babydoge
            stake_contract = '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46';
            break;
        case '0x55d398326f99059ff775485246999027b3197955': //usdt
            stake_contract = '0xff6ab02b94a830a9f8d2272001c2ada7c8035068';
            break;
    }
    switch (reward_contract) {
        case '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c': //bnb
            reward_contract = '0x04c7393e4cc11fe9177aca68594aef72a40166d9';
            break;
        case '0xc748673057861a797275cd8a068abb95a902e8de': //babydoge
            reward_contract = '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46';
            break;
        case '0x55d398326f99059ff775485246999027b3197955': //usdt
            reward_contract = '0xff6ab02b94a830a9f8d2272001c2ada7c8035068';
            break;
    }
    //remove

    let params = [];
    let sql = null;

    if (stake_contract === reward_contract) {
        sql = `select id
               from token_icons
               where stake_contract = ?
                 and reward_contract = ?`

        params = [
            stake_contract,
            reward_contract
        ]

        db.get(sql, params, function (err, result) {
            if (result === undefined) {
                if (isLp) {
                    var sql = `INSERT INTO token_icons (stake_contract,
                                                        reward_contract,
                                                        stake_image_main,
                                                        stake_image_lp_image)
                               VALUES (?, ?, ?, ?)`

                    var params = [
                        stake_contract,
                        stake_contract,
                        stakeImages[0],
                        stakeImages[1]
                    ]
                } else {
                    var sql = `INSERT INTO token_icons (stake_contract,
                                                        reward_contract,
                                                        stake_image_main,
                                                        reward_image_main)
                               VALUES (?, ?, ?, ?)`

                    var params = [
                        stake_contract,
                        stake_contract,
                        stakeImages,
                        rewardImages
                    ]
                }
                db.run(sql, params, function (err, result) {
                    updateTokenImgIdForContract(stake_contract, reward_contract)
                });
            } else {
                updateTokenImgIdForContract(stake_contract, reward_contract)
            }
        });
    } else {
        sql = `select id
               from token_icons
               where stake_contract = ?
                 and reward_contract = ?`

        params = [
            reward_contract,
            stake_contract,
        ]

        db.get(sql, params, function (err, result) {
            if (result === undefined) {
                var sql = `INSERT INTO token_icons
                           (stake_contract,
                            reward_contract,
                            stake_image_main,
                            stake_image_lp_image,
                            reward_image_main,
                            reward_image_lp_image)
                           VALUES (?, ?, ?, ?, ?, ?)`

                params = [
                    stake_contract,
                    reward_contract
                ]

                if (Array.isArray(stakeImages)) {
                    params[2] = stakeImages[0]
                    params[3] = stakeImages[1]
                } else {
                    params[2] = stakeImages
                    params[3] = ""
                }

                if (Array.isArray(rewardImages)) {
                    params[4] = rewardImages[0]
                    params[5] = rewardImages[1]
                } else {
                    params[4] = rewardImages
                    params[5] = ""
                }

                db.run(sql, params, function (err, result) {
                    if (err) {
                        console.log(err);
                        return false;
                    }
                    updateTokenImgIdForContract(stake_contract, reward_contract)
                });
            }
        });
    }
}

async function downloadImage(token) {

    // remove
    switch (token) {
        case '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd': //bnb
            token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
            break;
        case '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9': //bnb
            token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
            break;
        case '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46': //babydoge
            token = '0xc748673057861a797275cd8a068abb95a902e8de';
            break;
        case '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068': //usdt
            token = '0x55d398326f99059ff775485246999027b3197955';
            break;
    }
    // remove

    let url = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + token
    let downloaded = '/icons/noimagetoken.png';
    await axios.get(url).then(async response => {
        const image = response.data.image.large;
        const downloadPath = __dirname + "/icons/" + token + ".png";
        await download(image, downloadPath, () => {
        });
    }).then(() => {
        downloaded = "/icons/" + token + ".png"
    }).catch(error => {
        downloaded = '/icons/noimagetoken.png';
    });

    return downloaded
}

async function downloadLPimage(token0, token1) {
    token0 = token0.toLowerCase();
    token1 = token1.toLowerCase();
    // remove
    let oldToken0 = token0
    let oldToken1 = token1
    switch (token0) {
        case '0xae13d989dac2f0debff460ac112a837c89baa7cd': //bnb
            token0 = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
            break;
        case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
            token0 = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
            break;
        case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
            token0 = '0xc748673057861a797275cd8a068abb95a902e8de';
            break;
        case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
            token0 = '0x55d398326f99059ff775485246999027b3197955';
            break;
    }

    switch (token1) {
        case '0xae13d989dac2f0debff460ac112a837c89baa7cd': //bnb
            token1 = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
            break;
        case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
            token1 = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
            break;
        case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
            token1 = '0xc748673057861a797275cd8a068abb95a902e8de';
            break;
        case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
            token1 = '0x55d398326f99059ff775485246999027b3197955';
            break;
    }

    //remove

    let urlToken0 = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + token0
    let urlToken1 = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/" + token1
    let downloadImg0 = __dirname + "/icons/" + token0 + ".png";
    let downloadImg1 = __dirname + "/icons/" + token1 + ".png";

    let images = []

    if (!fs.existsSync(downloadImg0)) {
        await axios.get(urlToken0).then(async response => {
            const image = response.data.image.large;
            await download(image, downloadImg0);
        }).then(() => {
            images[0] = "/icons/" + token0 + ".png";
        }).catch(error => {
            images[0] = '/icons/noimagetoken.png';
        });
    } else {
        console.log('image exists attaching');
        images[0] = "/icons/" + token0 + ".png";
    }

    if (!fs.existsSync(downloadImg1)) {
        await axios.get(urlToken1).then(response => {
            const image = response.data.image.large;
            download(image, downloadImg1);
        }).then(() => {
            images[1] = "/icons/" + token1 + ".png";
        }).catch(error => {
            images[1] = '/icons/noimagetoken.png';
        });
    } else {
        console.log('image exists attaching');
        images[1] = "/icons/" + token1 + ".png";
    }

    return images;
}

var download = function (uri, filename) {
    request.head(uri, function (err, res, body) {
        console.log('downloading from ' + uri)
        request(uri).pipe(fs.createWriteStream(filename)).on('close', (() => {
        }));
    });
};

function updateTokenImgIdForContract(stake_contract, reward_contract) {
    var sql = `select id
               from token_icons
               where stake_contract = ?
                 and reward_contract = ?`

    var params = [
        stake_contract,
        reward_contract,
    ]

    db.get(sql, params, function (err, result) {

        var sql = `update vaults
                   set token_icon_id = ?
                   where stake_contract = ?
                     and reward_contract = ?`

        if (result) {
            var params = [
                result.id,
                stake_contract,
                reward_contract,
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