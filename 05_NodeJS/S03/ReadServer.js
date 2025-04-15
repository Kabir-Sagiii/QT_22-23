const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("home.html", "utf-8", (error, data) => {
    if (error) {
      res.end(error);
    } else {
      res.end(data);
    }
  });
});

server.listen(8989, () => {
  console.log("Server Started on Port 8989");
});
//http://localhost:8989
