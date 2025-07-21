const express = require("express");
const router = require("./src/router");
require("dotenv").config();
const app = express();

app.use(router);
app.get("/", (req, res) => res.send("test route"));

app.listen(process.env.PORT, () =>
  console.log(`server run on : http://127.0.0.1:${process.env.PORT}`)
);
