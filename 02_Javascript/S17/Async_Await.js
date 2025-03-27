function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve({
      ok: true,
      result: "successful",
    });
  });

  return promise;
}

// createPromise()
//   .then((success) => {
//     console.log("then");
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log("catch");
//     console.log(error);
//   });

async function handlePromise() {
  try {
    var data = await createPromise();
    console.log("try block");
    console.log(data);
  } catch (error) {
    console.log("catch block");
    console.log(error);
  }
}

handlePromise();
