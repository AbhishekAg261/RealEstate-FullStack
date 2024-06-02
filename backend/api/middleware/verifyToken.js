const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }
  const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!data) {
    return res.status(401).json({ message: "Not Authenticated" });
  }
  req.userId = data.id;
  next();
};

module.exports = verifyToken;
