function getAllProducts(collection) {
  // Write the logic to get all products from the products collection
  return collection.find().toArray();
  //it returns one promise and in that promise we have our data
}

module.exports = { getAllProducts };
