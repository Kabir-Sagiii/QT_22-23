const express = require("express");
const fs = require("fs");

const app = express();

app.get("/webpage", (req, res) => {
  fs.readFile("Home.html", "utf-8", (error, data) => {
    if (error) {
      res.send({ ok: false, result: "Failed to fetch data" });
    } else {
      res.send(data);
    }
  });
});

app.get("/login", (req, res) => {
  fs.readFile("Login.html", "utf-8", (error, data) => {
    if (error) {
      res.send({ ok: false, result: "Failed to fetch data" });
    } else {
      res.send(data);
    }
  });
});

app.get("/getdata", (req, res) => {
  res.send("Hello, My first Express Response");
});
//http://localhost:7979/getdata

app.get("/gethtml", (req, res) => {
  res.send("<h2>Hello i am h2</h2>");
});
//http://localhost:7979/gethtml

app.get("/getjson", (req, res) => {
  res.send({
    ok: true,
    result: [{ name: "s1" }, { name: "S2" }, { name: "S3" }],
  });
});
//http://localhost:7979/getjson

app.post("/create", (req, res) => {});
//http://localhost:7979/create

app.put("/update", (req, res) => {});
//http://localhost:7979/update

app.delete("/delete", (req, res) => {});
//http://localhost:7979/delete

app.listen(7979, () => {
  console.log("Server Started");
});
//http://localhost:7979
//create a server and start the server
