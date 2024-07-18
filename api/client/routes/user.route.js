const express = require("express");
const {
  getUsers,
  getUser,
  updateuser,
  deleteUser,
  savePost,
  profilePosts,
  userContact,
} = require("../controllers/user.controller");

const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

router.route("/").get(getUsers);

// router.route("/:id").get(verifyToken, getUser);

router.route("/:id").put(verifyToken, updateuser);
router.route("/:id").delete(verifyToken, deleteUser);
router.route("/save").post(verifyToken, savePost);
router.route("/profilePosts").get(verifyToken, profilePosts);
router.route("/contact").post(verifyToken, userContact);

module.exports = router;
