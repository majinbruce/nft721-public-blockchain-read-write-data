const express = require("express");
const {
  createTokenHandler,
  getTokenOwnerHandler,
  transferTokenHandler,
} = require("../controllers/token_controller");
const router = express.Router();

router.post("/createToken/:tokenId", createTokenHandler);
router.get("/ownerOf/:tokenId", getTokenOwnerHandler);
router.post("/transferToken", transferTokenHandler);

module.exports = router;
