var x = 100;

function f1() {
  console.log(x);
}

function f2() {
  var i = 100;
  console.log(x);
  console.log(fn); //hello
}

if (true) {
  console.log(x);
}

var fn = "hello";
f2();
f1();
