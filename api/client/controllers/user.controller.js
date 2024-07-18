const User = require("../models/user-model");
const SavedPost = require("../models/saved-post");
const bcrypt = require("bcrypt");
const Post = require("../models/post-model");
const Contact = require("../models/contact-model");

//not used
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(500).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed to get Users" });
  }
};

//not used
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      _id: id,
    });
    return res.status(500).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Not Authorized" });
  }
};

const updateuser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  // Check if the user is authorized
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    // Hash the new password if provided
    if (password) {
      inputs.password = await bcrypt.hash(password, 10);
    }

    // Add avatar to inputs if provided
    if (avatar) {
      inputs.avatar = avatar;
    }
    const updatedUser = await User.findByIdAndUpdate(id, inputs, {
      new: true,
    }).lean();
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    const { password: hidepassword, ...rest } = updatedUser;
    return res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed to get Users" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }
    const deletedUser = await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user Deleted Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "failed to get Users" });
  }
};

const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;
  try {
    const savedPost = await SavedPost.findOne({
      userId: tokenUserId,
      postId: postId,
    });

    if (savedPost) {
      await SavedPost.deleteOne({ _id: savedPost._id });
      res.status(200).json({ message: "Post removed from saved list" });
    } else {
      const check = await SavedPost.create({
        userId: tokenUserId,
        postId: postId,
      });
      res.status(200).json({ message: "Post saved" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save post" });
  }
};

const profilePosts = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const userPosts = await Post.find({ userId: tokenUserId });
    const saved = await SavedPost.find({ userId: tokenUserId }).populate(
      "postId"
    );

    const savedPosts = saved.map((item) => item.postId);
    return res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Not Authorized" });
  }
};

const userContact = async (req, res) => {
  const tokenUserId = req.userId;
  const { username, email, desc } = req.body;

  try {
    const newContact = await Contact.create({
      username,
      email,
      desc,
      userId: tokenUserId,
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Not Authorized" });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateuser,
  deleteUser,
  savePost,
  profilePosts,
  userContact,
};
