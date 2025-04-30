import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams(); // obj = {id:7}
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    image: "",
    price: 0,
    category: "",
    description: "",
    rating: {
      rate: 0,
    },
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product-details">
      <div className="imageDiv">
        <img src={product.image} width={"100%"} height={450} />
      </div>
      <div className="contentDiv">
        <dl>
          <dt>
            <b>Product Id</b>
          </dt>
          <dd>{product.id}</dd>
          <dt>
            <b>Product Title</b>
          </dt>
          <dd>{product.title}</dd>
          <dt>
            <b>Price</b>
          </dt>
          <dd>{product.price}</dd>
          <dt>
            <b>Category</b>
          </dt>
          <dd>{product.category}</dd>
          <dt>
            <b>Rating</b>
          </dt>
          <dd>{product.rating.rate}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>{product.description}</dd>
        </dl>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
