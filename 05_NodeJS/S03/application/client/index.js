function getData() {
  fetch("http://localhost:6969")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.getElementById("para").innerText = data;
      console.log(data);
    })
    .catch((error) => {
      document.getElementById("para").innerText = "Something went wrong";
      document.getElementById("para").style.color = "red";
      console.log(error);
    });
}
