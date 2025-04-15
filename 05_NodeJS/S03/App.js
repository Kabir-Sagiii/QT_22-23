const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.writeFile("home.html", "<h2>First line</h2>", (error) => {
    if (error) {
      res.end("Failed to Create File");
    } else {
      res.end("File Created Successfully");
    }
  });
});

server.listen(8989, () => {
  console.log("Server Started on Port 8989");
});
//http://localhost:8989
