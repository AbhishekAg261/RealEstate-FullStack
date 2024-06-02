const mongoose = require("mongoose");
const PostDetail = require("./post-details");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  images: [
    {
      type: String,
    },
  ],
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  bedroom: {
    type: String,
  },
  bathroom: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  mode: {
    type: String,
    enum: ["buy", "rent"],
  },
  property: {
    type: String,
    enum: ["apartment", "house", "condo", "land"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postDetail: {},
});

const Post = new mongoose.model("POST", postSchema);

module.exports = Post;
