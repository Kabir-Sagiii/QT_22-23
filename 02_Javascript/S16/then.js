var promiseObject = new Promise(function (resolve, reject) {
  resolve([{ name: "s1" }, { name: "S2" }, { name: "s3" }]);
});

promiseObject
  .then((success) => {
    console.log("then executed");
    console.log(success);
  })
  .catch((error) => {
    console.log("catch executed");
    console.log(error);
  });
