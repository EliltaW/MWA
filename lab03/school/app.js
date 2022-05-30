const express = require("express");
const path = require("path");
require("dotenv").config();
const router = require("./routes/schoolRoute");

const app = express();

app.use("/api", router);

const server = app.listen(process.env.PORT, function () {
  console.log("Listening on port", server.address().port);
});
