import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#dc3545",
    marginBottom: "1rem",
  };

  const messageStyle = {
    fontSize: "1.5rem",
    color: "#6c757d",
    marginBottom: "2rem",
  };

  const linkStyle = {
    fontSize: "1rem",
    color: "#007bff",
    textDecoration: "none",
    border: "1px solid #007bff",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const hoverLinkStyle = {
    ...linkStyle,
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>404</div>
      <div style={messageStyle}>Oops! Page not found.</div>
      <Link
        to="/"
        style={hover ? hoverLinkStyle : linkStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
