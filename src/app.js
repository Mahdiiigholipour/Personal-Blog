const express = require("express");
const router = require("./blog/router");
const path = require("path");
const {
  notfoundHandler,
  exceptionHandler,
} = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(router);

app.use(notfoundHandler);
app.use(exceptionHandler);

module.exports = app;
