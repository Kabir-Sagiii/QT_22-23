//user endpoints
const express = require("express");

const route = express.Router();
//100 api

route.get("/get-user", (req, res) => {
  res.send("Users Data");
});
//http://localhost:9999/api/users/get-user

route.post("/create-user", (req, res) => {
  res.send("Users Data");
});
//http://localhost:9999/api/users/create-user

module.exports = route;
