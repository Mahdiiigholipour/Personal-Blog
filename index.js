const express = require("express");
const router = require("./src/router");
const {
  notfoundHandler,
  exceptionHandler,
} = require("./src/middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(router);
app.get("/", (req, res) => res.send("test route"));

app.use(notfoundHandler);
app.use(exceptionHandler);

app.listen(process.env.PORT, () =>
  console.log(`server run on : http://127.0.0.1:${process.env.PORT}`)
);
