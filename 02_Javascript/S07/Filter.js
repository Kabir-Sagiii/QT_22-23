var data = [
  { pname: "iphone 16", price: 90000 },
  { pname: "iphone 15", price: 70000 },
  { pname: "samsung s23 ultra", price: 100000 },
  { pname: "vivo 29A", price: 30000 },
];

var newdata = data.filter(function (element) {
  //element = {pname:"--",price:"----"}
  var priceValue = element.price;
  var status = priceValue <= 30000;
  return status; // [element1]
});

console.log(newdata);
