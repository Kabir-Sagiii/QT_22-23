var x = 100; //104

var res = x++ + ++x + x++ + ++x;
//       100 + 102 + 102 + 104
console.log(res, x); //407,408,410,404
//104
