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
    }, {"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }, {"internalType": "contract IERC20", "name": "", "type": "address"}],
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
const {add} = require("nodemon/lib/rules");
const vaultAddress = "0x625Aba8e6414F25e9375a44b1e7188C0df4Adc86";
const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s3.binance.org:8545/');

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

function calcAPR() {
    var sql = 'select * from vaults'
    var params = []
    const vaultContract = new ethers.Contract(vaultAddress, vaultAbi, provider);
    db.all(sql, params, async (err, row) => {
        if (row) {
            for (const data of row) {
                let vaultInfo = await vaultContract.getVaultInfo(data.vid);
                // remove
                let priceToken = false;
                switch (data.reward_contract) {

                    case '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9': //bnb
                        priceToken = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                        break;
                    case '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46': //babydoge
                        priceToken = '0xc748673057861a797275cd8a068abb95a902e8de';
                        break;
                    case '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068': //usdt
                        priceToken = '0x55d398326f99059ff775485246999027b3197955';
                        break;
                    case '0x563d18D44660d459366785715B8cF6BbA7813474': //fakelp
                        priceToken = '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0';
                        break;

                }

                let priceTokenStake = false;
                switch (data.stake_contract) {
                    case '0x04C7393e4CC11FE9177aCa68594Aef72a40166d9': //bnb
                        priceTokenStake = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                        break;
                    case '0x9224c6e69c2237c9620eb1F4b7cBB8E53D21ea46': //babydoge
                        priceTokenStake = '0xc748673057861a797275cd8a068abb95a902e8de';
                        break;
                    case '0xfF6AB02b94a830a9f8d2272001c2adA7C8035068': //usdt
                        priceTokenStake = '0x55d398326f99059ff775485246999027b3197955';
                        break;
                    case '0x563d18D44660d459366785715B8cF6BbA7813474': //fakelp
                        priceTokenStake = '0xc736ca3d9b1e90af4230bd8f9626528b3d4e0ee0';
                        break;

                }
                // remove
                if (data.is_lp === 'true') {
                    if (data.reward_contract === data.stake_contract) {
                        writeSingleApr(true, data.vid, vaultInfo, data.stake_contract, data.start, data.end)
                    } else {
                        writeMultiApr(true, data.vid, vaultInfo, data.stake_contract, data.reward_contract, data.start, data.end)
                    }
                } else {
                    if (data.reward_contract === data.stake_contract) {
                        writeSingleApr(false, data.vid, vaultInfo, data.reward_contract, data.start, data.end)
                    } else {
                        writeMultiApr(false, data.vid, vaultInfo, data.stake_contract, data.reward_contract, data.start, data.end)
                    }
                }
            }
        }
    });
}

async function writeSingleApr(isLp = false, vid, vaultInfo, token, start, end) {

    if (!isLp) {
        let tokenContract = new ethers.Contract(ethers.utils.getAddress(token), minimalAbiToken, provider);
        const decimals = await tokenContract.decimals();
        let rewardAmount = ethers.utils.formatUnits(vaultInfo[0].toString(), getUnit(decimals));
        let usersAmount = ethers.utils.formatUnits(vaultInfo[7].toString(), getUnit(decimals));

        //remove
        switch (token) {
            case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                break;
            case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                token = '0xc748673057861a797275cd8a068abb95a902e8de';
                break;
            case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                token = '0x55d398326f99059ff775485246999027b3197955';
                break;
        }
        //remove

        let url = "https://api.pancakeswap.info/api/v2/tokens/" + token

        axios.get(url)
            .then(response => {
                let priceToken1 = response['data'].data.price;
                let stakedTotal = 1
                if (parseInt(usersAmount) > 0) {
                    stakedTotal = (usersAmount * priceToken1).toString();
                }

                let rewardTotal = (rewardAmount * priceToken1).toString();
                let apr = getApr(start, end, rewardTotal, stakedTotal)

                console.log('---APR---');
                console.log(rewardTotal);
                console.log(stakedTotal);
                console.log('------');
                console.log(apr)
                console.log('------');


                insertAPR(vid, apr)

            }).catch((error) => {
            console.log(error)
        });
    } else {

        const contract = new ethers.Contract(ethers.utils.getAddress(token), abi, provider);
        let tokenContract = new ethers.Contract(ethers.utils.getAddress(vaultInfo[9].toString()), minimalAbiToken, provider);
        const tokenDecimals = await tokenContract.decimals();
        let rewardAmount = ethers.utils.formatUnits(vaultInfo[0].toString(), getUnit(tokenDecimals));
        let usersAmount = ethers.utils.formatUnits(vaultInfo[7].toString(), getUnit(tokenDecimals));

        let lpSupply = await contract.totalSupply();
        let supplyF = ethers.utils.formatUnits(lpSupply, getUnit(contract.decimals()));
        let reserve = await contract.getReserves();
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

        //remove
        switch (token0.toLowerCase()) {
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
        //remove

        //remove
        switch (token1.toLowerCase()) {
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
                        let rewardTotal = (rewardAmount * price).toString();
                        let stakedTotal = 1
                        if (parseInt(usersAmount) > 0) {
                            stakedTotal = (usersAmount * priceToken1).toString();
                        }

                        let apr = getApr(start, end, rewardTotal, stakedTotal)

                        console.log('---APR---');
                        console.log(rewardTotal);
                        console.log(stakedTotal);
                        console.log('------');
                        console.log(apr)
                        console.log('------');


                        insertAPR(vid, apr)


                    })
                    .catch(error => {
                        console.log('error getting token price from lp ');
                        console.log('token0 ' + token0);
                    });
            })
            .catch(error => {
                console.log('error getting token price from lp ');
                console.log('token1 ' + token1);
            });
    }
}

async function writeMultiApr(isLP = false, vid, vaultInfo, stake_token, reward_token, start, end) {

    let stakeContract = new ethers.Contract(ethers.utils.getAddress(stake_token), abi, provider);
    let rewardContract = new ethers.Contract(ethers.utils.getAddress(reward_token), abi, provider);
    const stakeDecimals = await stakeContract.decimals();
    const rewardDecimals = await rewardContract.decimals();
    let rewardAmount = ethers.utils.formatUnits(vaultInfo[0].toString(), getUnit(rewardDecimals));
    let usersAmount = ethers.utils.formatUnits(vaultInfo[7].toString(), getUnit(stakeDecimals));

    if (!isLP) {
        //remove
        switch (stake_token) {
            case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                stake_token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                break;
            case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                stake_token = '0xc748673057861a797275cd8a068abb95a902e8de';
                break;
            case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                stake_token = '0x55d398326f99059ff775485246999027b3197955';
                break;
        }
        //remove

        //remove
        switch (reward_token) {
            case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                reward_token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                break;
            case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                reward_token = '0xc748673057861a797275cd8a068abb95a902e8de';
                break;
            case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                reward_token = '0x55d398326f99059ff775485246999027b3197955';
                break;
        }
        //remove

        let stakeUrl = "https://api.pancakeswap.info/api/v2/tokens/" + stake_token
        let rewardUrl = "https://api.pancakeswap.info/api/v2/tokens/" + reward_token

        axios.get(stakeUrl)
            .then(stakePrice => {
                axios.get(rewardUrl)
                    .then(rewardPrice => {
                        let priceStake = stakePrice['data'].data.price;
                        let priceReward = rewardPrice['data'].data.price;

                        let stakedTotal = 1
                        if (parseInt(usersAmount) > 0) {
                            stakedTotal = (usersAmount * priceStake).toString();
                        }

                        let rewardTotal = (rewardAmount * priceReward).toString();
                        let apr = getApr(start, end, rewardTotal, stakedTotal)

                        console.log('---APR--LP--SAME-');
                        console.log(rewardTotal);
                        console.log(stakedTotal);
                        console.log('------');
                        console.log(apr)
                        console.log('------');

                        insertAPR(vid, apr)

                    }).catch((error) => {
                    console.log(error)
                });

            }).catch((error) => {
            console.log(error)
        });
    } else {
        let rewardAmount = ethers.utils.formatUnits(vaultInfo[0].toString(), getUnit(rewardDecimals));
        let usersAmount = ethers.utils.formatUnits(vaultInfo[7].toString(), getUnit(stakeDecimals));

        let stakeContractIsLP = false;
        let rewardContractIsLP = false;

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

        console.log(stakeContractIsLP, rewardContractIsLP)

        console.log('-----BOOOOM>>>')

        if (stakeContractIsLP && rewardContractIsLP) {

            let lpSupplyStake = await stakeContract.totalSupply();
            let supplyStake = ethers.utils.formatUnits(lpSupplyStake, getUnit(stakeDecimals));
            let reservesStake = await stakeContract.getReserves();
            let token0Stake = await stakeContract.token0();
            let token1Stake = await stakeContract.token1();
            const contractToken0Stake = new ethers.Contract(token0Stake, minimalAbiToken, provider);
            const contractToken1Stake = new ethers.Contract(token1Stake, minimalAbiToken, provider);
            let decimalsToken0Stake = await contractToken0Stake.decimals();
            let decimalsToken1Stake = await contractToken1Stake.decimals();
            let reserve0Stake = reservesStake._reserve0;
            let reserveF0Stake = ethers.utils.formatUnits(reserve0Stake, getUnit(decimalsToken0Stake));
            let reserve1Stake = reservesStake._reserve1;
            let reserveF1Stake = ethers.utils.formatUnits(reserve1Stake, getUnit(decimalsToken0Stake));


            let lpSupplyReward = await rewardContract.totalSupply();
            let supplyReward = ethers.utils.formatUnits(lpSupplyReward, getUnit(rewardDecimals));
            let reservesReward = await rewardContract.getReserves();
            let token0Reward = await rewardContract.token0();
            let token1Reward = await rewardContract.token1();
            const contractToken0Reward = new ethers.Contract(token0Reward, minimalAbiToken, provider);
            const contractToken1Reward = new ethers.Contract(token1Reward, minimalAbiToken, provider);
            let decimalsToken0Reward = await contractToken0Reward.decimals();
            let decimalsToken1Reward = await contractToken1Reward.decimals();
            let reserve0Reward = reservesReward._reserve0;
            let reserveF0Reward = ethers.utils.formatUnits(reserve0Reward, getUnit(decimalsToken0Reward));
            let reserve1Reward = reservesReward._reserve1;
            let reserveF1Reward = ethers.utils.formatUnits(reserve1Reward, getUnit(decimalsToken0Reward));

            //remove - god this was so much work
            switch (token0Stake.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token0Stake = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token0Stake = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token0Stake = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }
            switch (token1Stake.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token1Stake = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token1Stake = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token1Stake = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }
            switch (token0Reward.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token0Reward = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token0Reward = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token0Reward = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }
            switch (token1Reward.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token1Reward = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token1Reward = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token1Reward = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }
            // remove

            let urlTokenStake0 = "https://api.pancakeswap.info/api/v2/tokens/" + token0Stake
            let urlTokenStake1 = "https://api.pancakeswap.info/api/v2/tokens/" + token1Stake
            let urlTokenReward0 = "https://api.pancakeswap.info/api/v2/tokens/" + token0Reward
            let urlTokenReward1 = "https://api.pancakeswap.info/api/v2/tokens/" + token1Reward

            console.log('ready for some reqs for apr')
            axios.get(urlTokenStake0)
                .then(response => {
                    console.log('got price stake 0')
                    let priceTokenStake0 = response['data'].data.price;
                    axios.get(urlTokenStake1)
                        .then(response => {
                            console.log('got price stake 1')

                            let priceTokenStake1 = response['data'].data.price;
                            axios.get(urlTokenReward0)
                                .then(response => {
                                    console.log('got price reward 0')

                                    let priceTokenReward0 = response['data'].data.price;
                                    axios.get(urlTokenReward1)
                                        .then(response => {
                                            console.log('got price reward 1')
                                            let priceTokenReward1 = response['data'].data.price;

                                            let valueTokenStake0 = reserveF0Stake * priceTokenStake0;
                                            let valueTokenStake1 = reserveF1Stake * priceTokenStake1;
                                            let totalSumStake = valueTokenStake0 + valueTokenStake1;
                                            let priceStake = totalSumStake / supplyStake;

                                            let stakedTotal = 1
                                            if (parseInt(usersAmount) > 0) {
                                                stakedTotal = (parseFloat(usersAmount) * parseFloat(priceStake)).toString();
                                            }

                                            let valueTokenReward0 = reserveF0Reward * priceTokenReward0;
                                            let valueTokenReward1 = reserveF1Reward * priceTokenReward1;
                                            let totalSumReward = valueTokenReward0 + valueTokenReward1;
                                            let priceReward = totalSumReward / supplyReward;
                                            let totalReward = (parseFloat(rewardAmount) * parseFloat(priceReward)).toString()

                                            let apr = getApr(start, end, totalReward, stakedTotal)

                                            console.log('---APR--BOTH--LP--');
                                            console.log(rewardTotal);
                                            console.log(stakedTotal);
                                            console.log('------');
                                            console.log(apr)
                                            console.log('------');


                                            console.log('Added')
                                        })
                                        .catch(error => {
                                        });

                                })
                                .catch(error => {
                                });
                        })
                        .catch(error => {
                        });
                })
                .catch(error => {

                });

            //remove

        } else if (stakeContractIsLP) {

            let lpSupplyStake = await stakeContract.totalSupply();
            let supplyStake = ethers.utils.formatUnits(lpSupplyStake, getUnit(stakeDecimals));
            let reservesStake = await stakeContract.getReserves();
            let token0Stake = await stakeContract.token0();
            let token1Stake = await stakeContract.token1();
            const contractToken0Stake = new ethers.Contract(token0Stake, minimalAbiToken, provider);
            const contractToken1Stake = new ethers.Contract(token1Stake, minimalAbiToken, provider);
            let decimalsToken0Stake = await contractToken0Stake.decimals();
            let decimalsToken1Stake = await contractToken1Stake.decimals();
            let reserve0Stake = reservesStake._reserve0;
            let reserveF0Stake = ethers.utils.formatUnits(reserve0Stake, getUnit(decimalsToken0Stake));
            let reserve1Stake = reservesStake._reserve1;
            let reserveF1Stake = ethers.utils.formatUnits(reserve1Stake, getUnit(decimalsToken0Stake));

            //remove - god this was so much work
            switch (token0Stake.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token0Stake = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token0Stake = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token0Stake = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }
            switch (token1Stake.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token1Stake = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token1Stake = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token1Stake = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }

            switch (reward_token) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    reward_token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    reward_token = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    reward_token = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }


            //remove


            let urlTokenStake0 = "https://api.pancakeswap.info/api/v2/tokens/" + token0Stake
            let urlTokenStake1 = "https://api.pancakeswap.info/api/v2/tokens/" + token1Stake
            let urlTokenRerward = "https://api.pancakeswap.info/api/v2/tokens/" + reward_token

            console.log('ready for some reqs -> stake is lp')
            axios.get(urlTokenStake0)
                .then(response => {
                    console.log('got price stake 0')
                    let priceTokenStake0 = response['data'].data.price;
                    axios.get(urlTokenStake1)
                        .then(response => {
                            console.log('got price stake 1')
                            let priceTokenStake1 = response['data'].data.price;
                            axios.get(urlTokenRerward)
                                .then(response => {
                                    console.log('got price reward 0')
                                    console.log('got price reward 1')
                                    let priceReward = response['data'].data.price;

                                    console.log('Will calculate price')

                                    let valueTokenStake0 = reserveF0Stake * priceTokenStake0;
                                    let valueTokenStake1 = reserveF1Stake * priceTokenStake1;
                                    let totalSumStake = valueTokenStake0 + valueTokenStake1;
                                    let priceStake = totalSumStake / supplyStake;
                                    let totalStake = (parseFloat(usersAmount) * parseFloat(priceStake))

                                    console.log('price stake total' + totalStake)

                                    let rewardTotal = priceReward * parseFloat(rewardAmount)
                                    let total = (totalStake + rewardTotal).toString()

                                    addTVL(vid, total)

                                    console.log('Added')

                                })
                                .catch(error => {
                                });
                        })
                        .catch(error => {
                        });
                })
                .catch(error => {

                });

        } else {

            let lpSupplyReward = await rewardContract.totalSupply();
            let supplyReward = ethers.utils.formatUnits(lpSupplyReward, getUnit(rewardDecimals));
            let reservesReward = await rewardContract.getReserves();
            let token0Reward = await rewardContract.token0();
            let token1Reward = await rewardContract.token1();
            const contractToken0Reward = new ethers.Contract(token0Reward, minimalAbiToken, provider);
            const contractToken1Reward = new ethers.Contract(token1Reward, minimalAbiToken, provider);
            let decimalsToken0Reward = await contractToken0Reward.decimals();
            let decimalsToken1Reward = await contractToken1Reward.decimals();
            let reserve0Reward = reservesReward._reserve0;
            let reserveF0Reward = ethers.utils.formatUnits(reserve0Reward, getUnit(decimalsToken0Reward));
            let reserve1Reward = reservesReward._reserve1;
            let reserveF1Reward = ethers.utils.formatUnits(reserve1Reward, getUnit(decimalsToken0Reward));

            //remove - god this was so much work
            switch (token0Reward.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token0Reward = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token0Reward = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token0Reward = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }
            switch (token1Reward.toLowerCase()) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    token1Reward = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    token1Reward = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    token1Reward = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }

            switch (stake_token) {
                case '0x04c7393e4cc11fe9177aca68594aef72a40166d9': //bnb
                    stake_token = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
                    break;
                case '0x9224c6e69c2237c9620eb1f4b7cbb8e53d21ea46': //babydoge
                    stake_token = '0xc748673057861a797275cd8a068abb95a902e8de';
                    break;
                case '0xff6ab02b94a830a9f8d2272001c2ada7c8035068': //usdt
                    stake_token = '0x55d398326f99059ff775485246999027b3197955';
                    break;
            }


            //remove


            let urlTokenReward0 = "https://api.pancakeswap.info/api/v2/tokens/" + token0Reward
            let urlTokenReward1 = "https://api.pancakeswap.info/api/v2/tokens/" + token1Reward
            let urlTokenStake = "https://api.pancakeswap.info/api/v2/tokens/" + stake_token

            console.log('ready for some reqs -> reward is lp')
            axios.get(urlTokenReward0)
                .then(response => {
                    console.log('got price stake 0')
                    let priceTokenReward0 = response['data'].data.price;
                    axios.get(urlTokenReward1)
                        .then(response => {
                            console.log('got price stake 1')
                            let priceTokenReward1 = response['data'].data.price;
                            axios.get(urlTokenStake)
                                .then(response => {
                                    console.log('got price reward 0')
                                    console.log('got price reward 1')
                                    let priceStake = response['data'].data.price;

                                    console.log('Will calculate price')
                                    let valueTokenReward0 = reserveF0Reward * priceTokenReward0;
                                    let valueTokenReward1 = reserveF1Reward * priceTokenReward1;
                                    let totalSumReward = valueTokenReward0 + valueTokenReward1;
                                    let priceReward = totalSumReward / supplyReward;
                                    let totalReward = (parseFloat(rewardAmount) * parseFloat(priceReward))
                                    let stakeTotal = parseFloat(usersAmount) * parseFloat(priceStake)

                                    let apr = getApr(data.start, data.end, totalReward, stakeTotal)

                                    console.log(apr)
                                })
                                .catch(error => {
                                });
                        })
                        .catch(error => {
                        });
                })
                .catch(error => {

                });

        }
    }
}


function getApr(startDate, endDate, rewardAmount, stakedAmount) {
    let start = moment(startDate * 1000)
    let end = moment(endDate * 1000)

    let days = end.diff(start, 'days') + 1;

    const dailyRate = rewardAmount / days;
    const annualizedYield = dailyRate * 365;
    return (annualizedYield / stakedAmount);
}


function insertAPR(vid, total) {

    var sql = `select *
               from vaults_apr
               where vid = ?`

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

        db.run(sql, params, function (err, result) {
        });

    });
}


calcAPR()

