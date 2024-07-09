# NFT 721 public blockchain read write data

## Technology Stack & Tools
* Solidity (Writing Smart Contract)
* Javascript (React & Testing)
* Ethers (Blockchain Interaction)
* Hardhat (Development Framework)

 #

 ## [ERC721.sol contarct](https://sepolia.etherscan.io/address/0xd9dd0129f782f12cff1f5695ac3dc65e48e685cc#code)
has a public mintNFT function to mint NFT ERC721 nfts

* Contract deployed on sepolia test network at:
> Qilanft contract address:- 0xD9DD0129F782F12cff1F5695aC3dc65e48e685cc

### [Create token(nft) api(write data to blockchain)](https://sepolia.etherscan.io/tx/0x78094c5a71c6d0ab46932ecde6bfcccab324f97bf84e6dfcc9bbe81b4463d717) 
 ![Screenshot 2024-07-09 031128](https://github.com/majinbruce/nft721-public-blockchain-read-write-data/assets/75832396/0f8e9ef8-f05e-499e-b401-f9e882f71eec)

### Get token owner(get data from blockchain)![Screenshot 2024-07-09 031342](https://github.com/majinbruce/nft721-public-blockchain-read-write-data/assets/75832396/53201a32-3618-4c67-933e-ac4c6fa45c0c)

### [Transfer token api](https://sepolia.etherscan.io/tx/0x99aa7ec953fe111cb969afaceaae3047e2629d0e21e86a1aeb08791a31984a33)
  ![Screenshot 2024-07-09 031903](https://github.com/majinbruce/nft721-public-blockchain-read-write-data/assets/75832396/72e34645-c769-4a33-b702-e092afb00b33)





## Requirements For Initial Setup
* Install NodeJS, should work with any node version below 16.5.0
* Install Hardhat

## Setting Up
1. Clone/Download the Repository </br></br>
2. Install Dependencies:
> npm init --yes </br>
> npm install --save-dev hardhat </br>
> npm install dotenv --save </br>

3. Install Plugins:
> npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai </br>
> npm install --save-dev @nomiclabs/hardhat-etherscan </br>
> npm install @openzeppelin/contracts
4. Compile:
> npx hardhat compile


5. Migrate Smart Contracts
> npx hardhat run scripts/deploy.js --network <network-name>

6. Run Tests
> $ npx hardhat test
