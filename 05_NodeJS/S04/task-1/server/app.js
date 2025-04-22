const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.end("working");
});

server.listen(7373, () => {
  console.log("Server started");
});
