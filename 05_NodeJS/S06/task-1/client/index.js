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
      return res.json();
    })
    .then((data) => {
      document.getElementById("success").innerText = data.result;
      setTimeout(() => {
        window.location.href = "Login.html";
      }, 2000);
    })
    .catch((error) => {
      document.getElementById("failure").innerText = error.error;
    });
}
