const http = require("http");

const server = http.createServer((req, res) => {
  res.end("response");
});

server.listen(5959, () => {
  console.log("Server Started");
});
//http://localhost:5959
