function getAllCartsDataController(carts) {
  return carts.find().toArray();
}

function addCartController(carts, data) {
  return carts.insertOne(data);
}

function removeCartController(carts, data) {
  return carts.deleteOne(data);
}

module.exports = {
  getAllCartsDataController,
  addCartController,
  removeCartController,
};
