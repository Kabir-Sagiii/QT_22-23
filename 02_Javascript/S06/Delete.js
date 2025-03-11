var user = {
  name: "pooja",
  gender: "female",
  id: 101,
};

delete user.id;
delete user["name"];
console.log(user);
