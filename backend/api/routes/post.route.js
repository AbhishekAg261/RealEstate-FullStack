const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

router.route("/").get(getPosts);
router.route("/:id").get(getPost);
router.route("/").post(verifyToken, addPost);
router.route("/:id").put(verifyToken, updatePost);
router.route("/:id").delete(verifyToken, deletePost);

module.exports = router;
