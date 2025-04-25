import React from "react";

const Mens = () => {
  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#1a1a1a",
  };

  const productsGrid = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  };

  const nameStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const priceStyle = {
    color: "#28a745",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const products = [
    {
      id: 1,
      name: "Casual Shirt",
      price: "$39.99",
      image: "https://via.placeholder.com/220x180?text=Shirt",
    },
    {
      id: 2,
      name: "Sneakers",
      price: "$59.99",
      image: "https://via.placeholder.com/220x180?text=Sneakers",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: "$120.00",
      image: "https://via.placeholder.com/220x180?text=Jacket",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Men's Collection</h2>
      <div style={productsGrid}>
        {products.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.image} alt={item.name} style={imgStyle} />
            <h3 style={nameStyle}>{item.name}</h3>
            <p style={priceStyle}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
