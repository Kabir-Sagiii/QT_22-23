const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  fs.readFile("document.txt", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to access the data");
    } else {
      res.end(data);
    }
  });
});

server.listen(6969, () => {
  console.log("Server started on 6969 port");
});
