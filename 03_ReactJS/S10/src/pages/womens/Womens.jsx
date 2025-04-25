import React from "react";

const Womens = () => {
  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#fff0f5",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "2rem",
    color: "#c71585",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
    color: "#333",
    marginBottom: "0.5rem",
  };

  const priceStyle = {
    color: "#ff1493",
    fontWeight: "bold",
  };

  const products = [
    {
      id: 1,
      name: "Floral Dress",
      price: "$49.99",
      image: "https://via.placeholder.com/220x180?text=Floral+Dress",
    },
    {
      id: 2,
      name: "Handbag",
      price: "$79.99",
      image: "https://via.placeholder.com/220x180?text=Handbag",
    },
    {
      id: 3,
      name: "Heels",
      price: "$69.99",
      image: "https://via.placeholder.com/220x180?text=Heels",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Women's Collection</h2>
      <div style={gridStyle}>
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

export default Womens;
