const express = require("express");
const createcollection = require("../model/connection");
const route = express.Router();
//100 api

route.get("/get-users", async (req, res) => {
  const collectionRef = await createcollection();

  //4. perform read operation or action
  const usersdata = await collectionRef.find().toArray();

  //5.send the response
  res.send({ ok: true, length: usersdata.length, result: usersdata });
});
//http://localhost:9999/api/users/get-users

route.post("/sign-in", async (req, res) => {
  var user_data = req.body;

  const collectionRef = await createcollection();

  collectionRef
    .find(user_data)
    .toArray()
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        res.send({
          ok: true,
          message: "Valid User",
          result: data,
        });
      } else {
        console.log("working");
        res.send({
          ok: false,
          error: "Invalid User",
        });
      }
    })
    .catch((error) => {
      res.send({
        ok: false,
        error: error,
      });
    });
});
//http://localhost:9999/api/users/sign-in

route.post("/sign-up", async (req, res) => {
  //access the data from request body
  const new_userdata = req.body;

  const collectionRef = await createcollection();

  //4 insertion
  collectionRef
    .insertOne(new_userdata)
    .then((data) => {
      res.send({ ok: true, result: "User Created" });
    })
    .catch((erorr) => {
      res.send({
        ok: false,
        error: error,
      });
    });
});
//http://localhost:9999/api/users/sign-up

module.exports = route;
