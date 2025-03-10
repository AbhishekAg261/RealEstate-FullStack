const jwt = require("jsonwebtoken");

const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  return res.status(200).json({ message: "You Are Authenticated" });
};

const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }
  const data = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY,
    async (err, payload) => {
      if (err) {
        return res.status(401).json({ message: "Not Authenticated" });
      }
      if (!data.isAdmin) {
        return res.status(403).json({ message: "Not Authorized" });
      }
    }
  );
  return res.status(200).json({ message: "You Are Authorized" });
};

module.exports = { shouldBeLoggedIn, shouldBeAdmin };
