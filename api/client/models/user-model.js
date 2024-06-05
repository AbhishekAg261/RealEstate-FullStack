const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createdAt: Date,
  savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "SAVEDPOST" }],
});

const User = new mongoose.model("USER", userSchema);

module.exports = User;
