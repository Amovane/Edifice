require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// web3.js
const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const account = web3.eth.accounts.wallet.add(PRIVATE_KEY);

console.log(account.address);

// ethers.js
const ethers = require("ethers");
const wallet = new ethers.Wallet(PRIVATE_KEY);
const publicKey = wallet.publicKey;

console.log(publicKey);
console.log(wallet.address);
