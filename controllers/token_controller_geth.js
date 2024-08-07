const { contract, wallet } = require("../utils/geth_provider");
const { ErrorHandler } = require("../utils/error_handler");
const ethers = require("ethers");

const createTokenHandlerGeth = async (req, res, next) => {
  const tokenURI = req.body.tokenURI;

  console.log(tokenURI, "token id");

  try {
    const tx = await contract.mintNFT(tokenURI);
    // await tx.wait();
    res.status(201).json({ txHash: tx.hash, tx_details: tx });
  } catch (error) {
    next(new ErrorHandler(500, error.message));
  }
};

const getTokenOwnerHandlerGeth = async (req, res, next) => {
  const tokenId = req.params.tokenId;

  console.log(tokenId, "token id");
  // Validate `tokenId`
  if (!Number.isInteger(Number(tokenId)) || Number(tokenId) < 0) {
    return next(new ErrorHandler(400, "Invalid tokenId"));
  }

  try {
    const owner = await contract.ownerOf(tokenId);
    res.status(200).json({ owner });
  } catch (error) {
    next(new ErrorHandler(500, error.message));
  }
};

const transferTokenHandlerGeth = async (req, res, next) => {
  const { to, tokenId } = req.body;

  // Validate `to` address
  if (!ethers.utils.isAddress(to)) {
    return next(new ErrorHandler(400, "Invalid recipient address"));
  }

  // Validate `tokenId`
  if (!Number.isInteger(tokenId) || tokenId < 0) {
    return next(new ErrorHandler(400, "Invalid tokenId"));
  }
  try {
    // Check if the wallet owns the token
    const owner = await contract.ownerOf(tokenId);
    if (owner.toLowerCase() !== wallet.address.toLowerCase()) {
      return next(new ErrorHandler(403, "You do not own this token"));
    }

    const tx = await contract.transferFrom(wallet.address, to, tokenId);
    await tx.wait();
    res.status(201).json({ txHash: tx.hash, tx_details: tx });
  } catch (error) {
    next(new ErrorHandler(500, error.message));
  }
};

module.exports = {
  createTokenHandlerGeth,
  getTokenOwnerHandlerGeth,
  transferTokenHandlerGeth,
};
