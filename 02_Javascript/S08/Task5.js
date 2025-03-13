var x = 10; //10
var y = 10; //11

var res = x++ + ++y - x-- - --y + y++;
//        10 + 11 - 11 - 10 + 10
console.log(res); //10,11
console.log(x); //10
console.log(y); //11
