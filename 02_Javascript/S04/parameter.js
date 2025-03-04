function fnPrint(num1, num2) {
  var x = num1;
  var y = num2;
  var result = x + y;
  console.log(result);

  return result;
}

var fndata = fnPrint(10, 20);
console.log("console value", fndata);

fnPrint(30, 40);

fnPrint(50, 50);
