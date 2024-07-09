const { ethers } = require("ethers");
require("dotenv").config();
const contract_abi =
  require("../artifacts/contracts/ERC721.sol/QilaNFT.json").abi;

console.log(process.env.ALCHEMY_API_KEY);
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_API_KEY
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_1, provider);

const contractABI = JSON.stringify(contract_abi);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

module.exports = { provider, wallet, contract };
