var obj1 = {
  c: 100,
};

var obj2 = {
  c: 150,
};

function fnadd(x, y) {
  var res = x + y + this.c;
  console.log(res);
}

// var x = fnadd.bind(obj1, 10, 20);
// x()

// var x = fnadd.bind(obj1);
// x(30, 30);

// fnadd.bind(obj1)(2, 3);

fnadd.bind(obj2, 5, 5)();
