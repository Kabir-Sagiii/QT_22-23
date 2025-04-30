import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
function Product({ image, title, price, id }) {
  const navigate = useNavigate();
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

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
