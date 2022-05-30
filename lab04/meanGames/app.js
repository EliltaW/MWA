require("./data/db").open();
// const res = require("express/lib/response");
const express = require("express");
const routes = require("./routers/gamesRouter");
const path = require("path");
require("dotenv").config();

const app = express();

app.use("/api", routes);

const server = app.listen(process.env.PORT, function () {
  console.log("Listening on port", server.address().port);
});
