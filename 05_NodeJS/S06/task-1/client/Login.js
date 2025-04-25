function login() {
  var collection = document.getElementsByTagName("input");
  var email = collection[0].value;
  var password = collection[1].value;

  var user = {
    email,
    password,
  };

  fetch("http://localhost:7373/login", {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.ok) {
        window.location.href = "Home.html";
      } else {
        throw Error("Invalid User");
      }
    })
    .catch((error) => {
      document.getElementById("error").innerText =
        "Check Credentials or Create New Account";
    });
}
