const express = require("express");
const {
  createTokenHandler,
  getTokenOwnerHandler,
  transferTokenHandler,
} = require("../controllers/token_controller");

const {
  createTokenHandlerGeth,
  getTokenOwnerHandlerGeth,
  transferTokenHandlerGeth,
} = require("../controllers/token_controller_geth");
const router = express.Router();

router.post("/createToken/:tokenURI", createTokenHandler);
router.get("/ownerOf/:tokenId", getTokenOwnerHandler);
router.post("/transferToken", transferTokenHandler);

router.post("/createTokenGeth", createTokenHandlerGeth);
router.get("/ownerOfGeth/:tokenId", getTokenOwnerHandlerGeth);
router.post("/transferTokenGeth", transferTokenHandlerGeth);

module.exports = router;
