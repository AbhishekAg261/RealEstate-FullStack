const express = require("express");
const {
  getUsers,
  getUser,
  updateuser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

router.route("/").get(getUsers);

router.route("/:id").get(verifyToken, getUser);

router.route("/:id").put(verifyToken, updateuser);
router.route("/:id").delete(verifyToken, deleteUser);

module.exports = router;
