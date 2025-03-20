function f1() {
  return [10, 20];
}

// var x = f1();
// console.log(x[1]);

var [a, b] = f1();
console.log(a, b);
