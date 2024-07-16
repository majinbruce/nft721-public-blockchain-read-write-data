const { ethers } = require("ethers");
require("dotenv").config({ path: "../.env" });

const contract_abi =
  require("../artifacts/contracts/ERC721.sol/QilaNFT.json").abi;

let provider, wallet, contract;

try {
  const GETH_URL = process.env.GETH_URL;
  const GETH_PRIVATE_KEY_1 = process.env.GETH_PRIVATE_KEY_1;
  const CONTRACT_ADDRESS_GETH = process.env.CONTRACT_ADDRESS_GETH;

  if (!GETH_URL || !GETH_PRIVATE_KEY_1 || !CONTRACT_ADDRESS_GETH) {
    throw new Error("Missing environment variables");
  }

  console.log(GETH_URL, "GETH_URL");

  provider = new ethers.providers.JsonRpcProvider(GETH_URL);

  wallet = new ethers.Wallet(GETH_PRIVATE_KEY_1, provider);

  contract = new ethers.Contract(CONTRACT_ADDRESS_GETH, contract_abi, wallet);
} catch (error) {
  console.error("Error initializing ethers:", error);
}

module.exports = { provider, wallet, contract };
