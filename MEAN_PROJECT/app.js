const express = require("express");
require("dotenv").config();
const app = express();
require("./Api/data/db");

const router = require("./Api/routers/movies.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const server = app.listen(process.env.PORT, function () {
  console.log("Listening on port ", server.address().port);
});
