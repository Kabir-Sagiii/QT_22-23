const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const data_base = "db2223";
// const collection_name = "users";
const mongoclient = new MongoClient(url);

async function createconnection(collection_name) {
  //1. connect with Mongodb Server
  await mongoclient.connect();

  //2. connect with database
  const dbRef = mongoclient.db(data_base);

  //3.connect with collection
  const collectionRef = dbRef.collection(collection_name);

  return collectionRef;
}

module.exports = createconnection;
