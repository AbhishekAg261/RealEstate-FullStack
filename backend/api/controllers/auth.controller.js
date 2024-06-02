const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const date = new Date();

    //checking if email is already present
    const emailExist = await User.findOne({ email });
    const usernameExist = await User.findOne({ username });
    if (emailExist) {
      return res.status(400).json({ message: "email already exists" });
    }
    if (usernameExist) {
      return res.status(400).json({ message: "username already exists" });
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      avatar: "",
      createdAt: date,
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ message: "failed to create user" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    //check if user exists
    const user = await User.findOne({ username });
    if (user == null) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      //make cookie and send

      //   res
      //     .setHeader("Set-Cookie", "test=" + "myValue")
      //     .json({ message: "success" });

      const age = 1000 * 60 * 60 * 24 * 7;
      const token = jwt.sign(
        {
          id: user._id,
          isAdmin: true,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: age,
        }
      );

      const userInfo = {
        _id: user._id,
        email: user.email,
        username: user.username,
        avatar: user.avatar,
        createdAt: user.createdAt,
      };

      return res
        .cookie("token", token, {
          httpOnly: true,
          // secure: true,
          maxAge: age,
        })
        .status(200)
        .json(userInfo);
    }
  } catch (err) {
    return res.status(500).json({ message: "invalid credentails" });
  }
};
const logout = (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "logout successfull" });
};

module.exports = { register, login, logout };
