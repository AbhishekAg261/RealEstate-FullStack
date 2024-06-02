const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken.js");
const {
  shouldBeLoggedIn,
  shouldBeAdmin,
} = require("../controllers/test.controller.js");

router.route("/should-be-logged-in").get(verifyToken, shouldBeLoggedIn);
router.route("/should-be-admin").get(shouldBeAdmin);

module.exports = router;
