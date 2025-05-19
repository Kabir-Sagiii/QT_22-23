var express = require("express");
var route = express.Router();
var verifyToken = require("../middleware/Auth");
var createconnection = require("../model/connection");
var {
  getAllCartsDataController,
  addCartController,
  removeCartController,
} = require("../controllers/cartsController");
const { ObjectId } = require("mongodb");

route.get("/getcarts", verifyToken, async (req, res) => {
  console.log("done");
  try {
    var carts = await createconnection("carts");
    var data = await getAllCartsDataController(carts);
    if (data) {
      res.send({ ok: true, length: data.length, result: data });
    } else {
      throw Error("Failed to access Cart Data");
    }
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

// http://localhost:9999/api/carts/getcarts

route.post("/addcart", verifyToken, async (req, res) => {
  const cart_data = req.body;

  try {
    var carts = await createconnection("carts");

    var data = await addCartController(carts, cart_data);

    if (data) {
      res.send({ ok: true, result: data });
    } else {
      throw Error("Failed to add Cart Data");
    }
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});

// http://localhost:9999/api/carts/addcart

route.delete("/removecart/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    var carts = await createconnection("carts");

    var data = await removeCartController(carts, { _id: id });

    if (data) {
      console.log(data);
      res.send({ ok: true, result: data });
    } else {
      throw Error("Failed to remove Cart Data");
    }
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});
// http://localhost:9999/api/carts/removecart/<id>
module.exports = route;
