const User = require("../models/user-model");
const bcrypt = require("bcrypt");

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
    console.log(updateuser);
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

module.exports = { getUsers, getUser, updateuser, deleteUser };
