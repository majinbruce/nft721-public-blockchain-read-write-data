require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: "../.env" });
require("@nomiclabs/hardhat-etherscan");

const {
  PRIVATE_KEY_1,
  ALCHEMY_API_KEY,
  ETHERSCAN_API_KEY,
  GETH_URL,
  GETH_PRIVATE_KEY_1,
} = process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.4",
      },
    ],
  },
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${PRIVATE_KEY_1}`],
    },
    local_geth_blockchain: {
      url: GETH_URL,
      accounts: [`0x${GETH_PRIVATE_KEY_1}`],
    },
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
