//product endpoints
const express = require("express");
const route = express.Router();
//100api
route.get("/get-products", (req, res) => {
  res.send("Products data");
});
//http://localhost:9999/api/products/get-products

module.exports = route;
