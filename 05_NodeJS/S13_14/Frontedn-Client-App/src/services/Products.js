import axios from "axios";
export const getProducts = (setState) => {
  axios
    .get("http://localhost:9999/api/products/allproducts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setState(res.data.result);
    })
    .catch((error) => {
      alert("failed to get the data");
      console.log(error);
    });
};
