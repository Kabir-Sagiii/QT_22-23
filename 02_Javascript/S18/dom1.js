function fnGetDOM() {
  var inputDomElement = document.querySelector(".textbox");
  var passwordBox = document.querySelector("#passwordbox");
  var pDomElement = document.querySelector("#content");
  //   var p2Dom = document.querySelector("#password");
  var p2DomElement = document.getElementById("password");

  var data = inputDomElement.value;
  var passwordValue = passwordBox.value;

  pDomElement.innerText = data;
  p2DomElement.innerText = passwordValue;
}
