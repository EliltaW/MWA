const http = require("http");
const fs = require("fs");
const path = require("path");

const serveAllRequests = function (req, res) {
  let statusCode;
  let fileBuffer;
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/index.html":
      fs.readFile(path.join(__dirname, "index.html"), function (err, buffer) {
        if (err) {
          statusCode = 404;
          fileBuffer = "File not found";
        } else {
          statusCode = 200;
          fileBuffer = buffer;
        }

        res.writeHead(statusCode);
        res.end(fileBuffer);
      });
      break;

    case "/page1.html":
      fs.readFile(path.join(__dirname, "page1.html"), function (err, buffer) {
        if (err) {
          statusCode = 404;
          fileBuffer = "File not found";
        } else {
          statusCode = 200;
          fileBuffer = buffer;
        }

        res.writeHead(statusCode);
        res.end(fileBuffer);
      });
      break;

    case "/page2.html":
      fs.readFile(path.join(__dirname, "page2.html"), function (err, buffer) {
        if (err) {
          statusCode = 404;
          fileBuffer = "File not found";
        } else {
          statusCode = 200;
          fileBuffer = buffer;
        }

        res.writeHead(statusCode);
        res.end(fileBuffer);
      });
      break;

    case "/":
      if (req.method === "POST") {
        console.log("post request");
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end("{'Post request' : 'JASON response'}");
      } else if (req.method === "GET") {
        res.writeHead(301, { Location: `/index.html` });
        res.end();
      }
      break;
  }
};

const server = http.createServer(serveAllRequests);
server.listen(4343, function () {
  console.log("Listening on port 4343");
});
