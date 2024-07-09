const { ethers } = require("hardhat");

async function main() {
  const NFT = await ethers.getContractFactory("QilaNFT");
  const nft = await NFT.deploy("QilaNFT", "QNFT");
  await nft.deployed();

  console.log("\n nft deployed at", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
