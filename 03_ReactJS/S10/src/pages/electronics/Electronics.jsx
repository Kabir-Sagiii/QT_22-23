import React from "react";

const Electronics = () => {
  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#222",
  };

  const productsGrid = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1.5rem",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  };

  const productTitleStyle = {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#333",
  };

  const priceStyle = {
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "1rem",
  };

  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "$699",
      image: "https://via.placeholder.com/250x150?text=Smartphone",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$999",
      image: "https://via.placeholder.com/250x150?text=Laptop",
    },
    {
      id: 3,
      name: "Smartwatch",
      price: "$199",
      image: "https://via.placeholder.com/250x150?text=Smartwatch",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Electronics Products</h2>
      <div style={productsGrid}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.name} style={imgStyle} />
            <h3 style={productTitleStyle}>{product.name}</h3>
            <p style={priceStyle}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
