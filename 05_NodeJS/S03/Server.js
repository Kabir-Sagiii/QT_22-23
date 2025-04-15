const http = require("http");
const port = 7979;

//To create a web server
const server = http.createServer((req, res) => {
  res.end("Hello, This is my First Response From Server");
});

//How to start the server
server.listen(port, () => {
  console.log("Server Started");
});
//http://localhost:7979
