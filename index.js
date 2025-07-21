const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => res.send("test route"));

app.listen(process.env.PORT, () =>
  console.log(`server run on : http://127.0.0.1:${process.env.PORT}`)
);
