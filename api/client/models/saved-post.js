const mongoose = require("mongoose");

const savedPostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: { type: Date, default: Date.now() },
});

const SavedPost = new mongoose.model("SAVEDPOST", savedPostSchema);

module.exports = SavedPost;
