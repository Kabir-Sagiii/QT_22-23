var data = [4, 5, 6, 234, 5678];

var squareList = data.map(function (element, index) {
  var res = element * element;
  return res; // [16,25,36,---,-----]
});

console.log(squareList);
