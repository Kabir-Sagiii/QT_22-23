var express = require("express");
var route = express.Router();
var {
  getAllProducts,
  addProduct,
  removeProduct,
} = require("../controllers/productsController");
var createconnection = require("../model/connection");
var verifyToken = require("../middleware/Auth");
const { ObjectId } = require("mongodb");

route.get("/allproducts", verifyToken, async (req, res) => {
  try {
    //Get the collection by connecting with server, database and collection
    const products = await createconnection("products");

    //Call Products Controller
    const data = await getAllProducts(products);
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
// http://localhost:9999/api/products/allproducts

route.post("/add-cart-product", verifyToken, async (req, res) => {
  try {
    const data = req.body;

    const collection = await createconnection("carts");

    var result = await addProduct(collection, data);

    if (result) {
      res.send({ ok: true, result: result });
    } else {
      throw Error("failed to add cart product");
    }
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});
// http://localhost:9999/api/products/add-cart-product

route.delete("/remove/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;

    const collection = await createconnection("carts");

    var result = await removeProduct(collection, { _id: new ObjectId(id) });

    if (result) {
      res.send({ ok: true, result: result });
    } else {
      throw Error("failed to remove cart product");
    }
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

// http://localhost:9999/api/products/remove

module.exports = route;
