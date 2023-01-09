const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/database");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const projectRoute = require("./routes/project");

const app = express();

dotenv.config({ path: "./config/config.env" });

// CONNECT DB
connectDatabase();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/project", projectRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server running on:", `http://localhost:${port}`);
});
