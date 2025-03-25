var obj1 = {
  c: 30,
};
var obj2 = {
  c: 100,
};

function fnAdd(x, y) {
  var result = x + y + this.c;
  console.log(result);
}

fnAdd.call(obj1, 10, 10); //50

fnAdd.call(obj2, 10, 10); //120

fnAdd.apply(obj1, [20, 30]);
