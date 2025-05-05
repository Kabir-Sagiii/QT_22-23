var express = require("express");
var route = express.Router();
var productsController = require("../controllers/productsController");
var createconnection = require("../model/connection");
var verifyToken = require("../middleware/Auth");
route.get("/allproducts", verifyToken, async (req, res) => {
  try {
    //Get the collection by connecting with server, database and collection
    const products = await createconnection("products");

    //Call Products Controller
    const data = await productsController(products);
    if (data) {
      res.send({
        ok: true,
        result: data,
      });
    } else {
      throw Error("Failed to fetch the data");
    }
  } catch (error) {
    res.send({ ok: false, error: error.message });
  }
});
