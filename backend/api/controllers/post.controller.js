const Post = require("../models/post-model");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "failed to get response" });
  }
};
const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findOne({
      _id: id,
    }).populate({
      path: "userId",
      model: "USER",
      select: { username: true, avatar: true },
    });
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "failed to get response" });
  }
};
const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const newPost = await Post.create({
      ...body.postData,
      userId: tokenUserId,
      postDetail: body.postDetail,
    });
    return res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "failed to get response" });
  }
};
const updatePost = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "failed to test1 test2 get response" });
  }
};
const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  try {
    //finding post by id
    const post = await Post.findById({
      _id: id,
    });

    if (post.userId.toString() !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized" });
    }
    const deletedPost = await Post.deleteOne({
      _id: id,
    });
    return res.status(200).json({ message: "Post Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "failed to get response" });
  }
};

module.exports = { getPosts, getPost, addPost, updatePost, deletePost };
