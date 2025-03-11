var user = {
  name: "S1",
  id: 101,
  address: {
    city: {
      cname: "Gurugram",
      pin: 12344,
    },
    state: "TS",
  },
};

console.log(user.address.city.pin);

user.address.city = "war";

console.log(user.address.city);
