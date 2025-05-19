function getAllProducts(collection) {
  // Write the logic to get all products from the products collection
  return collection.find().toArray();
  //it returns one promise and in that promise we have our data
}

function addProduct(collection, data) {
  // Write the logic to get all products from the products collection
  return collection.insertOne(data);
  //it returns one promise and in that promise we have our data
}

function removeProduct(collection, data) {
  return collection.deleteOne(data);
}

module.exports = { getAllProducts, addProduct, removeProduct };
