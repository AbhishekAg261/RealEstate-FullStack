require("dotenv").config();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const connectDb = require("./utils/db");

const authRoute = require("./routes/auth.route");
const testRoute = require("./routes/test.route");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.route");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);

const PORT = 8800;
connectDb().then(() => {
  app.listen(8800, () => {
    console.log("server in running on port 8800");
  });
});
