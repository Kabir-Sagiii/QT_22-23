var x = function () {
  console.log("function is working");
};

x();

function fnPrint() {
  var x = 10;
  var y = 20;
  var result = x + y;
  console.log(result);
}

fnPrint(); //10 & 20

fnPrint(); //30 & 40

fnPrint(); //50 & 50
