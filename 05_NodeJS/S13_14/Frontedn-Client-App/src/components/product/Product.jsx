import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Product.css";
function Product({ image, title, price, id, product }) {
  const navigate = useNavigate();

  const addToCart = () => {
    axios
      .post("http://localhost:9999/api/carts/addcart", product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("added in the cart");
      })
      .catch((error) => {
        console.log(error);
        alert("failed to add");
      });
  };

  return (
    <div className="card">
      <img src={image} alt="" width={270} height={230} />
      <h4>{title}</h4>
      <p>${price}</p>
      <div>
        <button
          onClick={() => {
            navigate(`/productdetails/${id}`);
          }}
        >
          Product Details
        </button>

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
