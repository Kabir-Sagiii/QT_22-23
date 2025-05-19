import { useEffect, useState } from "react";
import axios from "axios";
function Cart() {
  const [cart, setCarts] = useState([]);
  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = () => {
    axios
      .get("http://localhost:9999/api/carts/getcarts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setCarts(res.data.result);
      })
      .catch((error) => {
        alert("Failed");
        console.log(error);
      });
  };

  const removeProductFromCart = (id) => {
    axios
      .delete(`http://localhost:9999/api/carts/removecart/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        getCartData();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to remove from cart");
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ color: "green" }}>Cart Products Page</h1>
      <br />
      <hr />

      <br />
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => {
            console.log(product);
            return (
              <div>
                <div
                  style={{
                    display: "flex",
                    width: "500px",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "20px",
                  }}
                >
                  <div style={{ width: "60%" }}>
                    {" "}
                    <h3>{product.productName}</h3>
                  </div>
                  <div style={{ width: "20%" }}>
                    <p>{product.price}</p>
                  </div>
                  <div style={{ width: "20%" }}>
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "7px 20px",
                      }}
                      onClick={() => {
                        removeProductFromCart(product["_id"]);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <h1 style={{ color: "red", textAlign: "center" }}>
          No Product Added in Cart
        </h1>
      )}
    </div>
  );
}

export default Cart;
