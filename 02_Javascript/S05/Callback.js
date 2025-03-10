function f1(x) {
  console.log("f1 is called");
  console.log(x);
  x();
}

function f2() {
  console.log("f2 is called");
}

f1(f2);

console.log("-------------------------------");

f1(function f3() {
  console.log("f3 is called");
});

console.log("-------------------------------");

f1(function () {
  console.log("Anonymous as a callback");
});

console.log("-------------------------------");

f1(() => {
  console.log("arrow as a callback");
});
