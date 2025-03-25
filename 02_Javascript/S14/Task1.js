function f1() {
  var x = 10;

  function f2() {
    console.log("f2 is called");
  }

  var arr = [x, f2];

  return arr;
}

var [x, f2] = f1();
// console.log(data); //data =[10,f2]

// data[1]();

f2();
