const express = require("express");
const app = express();
const UserRoute = require("./controllers/users");
const ProductRoute = require("./controllers/products");

app.use("/api/users", UserRoute);
app.use("/api/products", ProductRoute);

// app.use((req, res, next) => {
//   console.log("use is ccalled");
//   next();
// });
//it is used to configure common middleware

// app.get(
//   "/get-data",
//   (req, res, next) => {
//     console.log("m-1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("m-2");
//     res.send("From m-2");
//     next();
//   },
//   (req, res) => {
//     console.log("RH-1");
//     // res.send({ ok: true, result: "Working Fine as of now" });
//   }
// ); //http://localhost:9999/get-data

// app.get("/get-data", (req, res) => {
//   res.send({ ok: true, result: "from end point-1" });
// });

// app.get("/get-info", (req, res) => {
//   res.send({ ok: true, result: "from 2nd end " });
// });

app.listen(9999, () => {
  console.log("Server Started");
});
