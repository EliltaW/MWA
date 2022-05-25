require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

app.get("/index.html", function (req, res) {
  console.log("file request received");
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.get("/page1.html", function (req, res) {
  console.log("file request received");
  res.status(200).sendFile(path.join(__dirname, "page1.html"));
});

app.get("/page2.html", function (req, res) {
  console.log("file request received");
  res.status(200).sendFile(path.join(__dirname, "page2.html"));
});

app.get("/", function (req, res) {
  res.redirect(301, "/index.html");
});

app.post("/", function (req, res) {
  res.json({ jason: "true" });
});

app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), function () {
  console.log("Listening on port ", server.address().port);
});
