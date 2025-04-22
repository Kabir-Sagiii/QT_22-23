function subscribeUser() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var userdata = {
    username,
    email,
    password,
  };

  fetch("http://localhost:7373/", {
    method: "post",
    body: JSON.stringify(userdata),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      alert("Success");
      console.log(data);
    })
    .catch((error) => {
      alert("Failure");
      console.log(error);
    });
}
