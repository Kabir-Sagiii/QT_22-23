const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  console.log(req.body);
  res.end("working");
});

server.listen(7373, () => {
  console.log("Server started");
});
