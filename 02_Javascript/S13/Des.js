var obj = {
  pname: "iphone",
  price: 60000,
};
const { price } = obj;

var users = ["x1", "x2", "x3", "x4"];

const [, , c] = users;

function f1() {
  if (true) {
  }
  if (true) {
    console.log("Price", price);
    console.log(c);
  }
  if (true) {
  }
}

function f2() {
  if (true) {
  }
  if (true) {
    console.log("Price", price, c);
  }
  if (true) {
    console.log("Price", price, c);
  }
}

f1();
f2();
