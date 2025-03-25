function createPromise(status) {
  var promise = new Promise(function (resolve, reject) {
    if (status) {
      resolve({ ok: true, message: "Successful" });
    } else {
      reject({ ok: false, message: "Rejected" });
    }
  });

  return promise;
}

// let data = createPromise(false);

// data
//   .then((s) => {
//     console.log(s);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

createPromise(true)
  .then((s) => {
    console.log(s);
  })
  .catch((e) => {});
