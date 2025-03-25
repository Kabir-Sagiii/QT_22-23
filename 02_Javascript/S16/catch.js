var promiseObject = new Promise(function (resolve, reject) {
  reject({
    ok: false,
    result: "something went wrong",
  });
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
