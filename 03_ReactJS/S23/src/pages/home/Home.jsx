import React from "react";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
    textAlign: "center",
    maxWidth: "600px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleClick = () => {
    alert("Welcome to the Home Page!");
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My React App</h1>
      <p style={paragraphStyle}>
        This is a simple home page built with a functional component in React.
        It's styled using inline CSS to keep things quick and easy.
      </p>
      <button style={buttonStyle} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default Home;
