import { useState, useEffect } from "react";
import "./Products.css";
import { getProducts } from "../../services/Products";
import Product from "../product/Product";

function Products({ title }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getProducts(setState);
  }, []);

  return (
    <div className="products">
      <div className="brandContainer">
        <div className="shadow">
          <h1>{title} Information</h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et
            optio laboriosam nostrum blanditiis aut error, cupiditate doloremque
            ipsa? Laboriosam totam fuga eligendi eveniet quam distinctio maxime
            ducimus quaerat libero, exercitationem culpa perspiciatis tempore
            velit reiciendis dignissimos similique! Quaerat, quisquam ut
            asperiores repudiandae nesciunt iure, saepe id quis et natus quam
            nihil fuga aspernatur aliquid facere atque officia, vel voluptates?
          </p>
        </div>
      </div>

      <div className="product">
        {state.length > 0 &&
          state
            .filter((product) => {
              return product.category === title;
            })
            .map((product) => {
              return (
                <Product
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Products;
