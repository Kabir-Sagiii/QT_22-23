import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import authContext from "./context/auth";
import { useContext } from "react";
function Header() {
  const { logout } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="brand">
        <h1>Dude'sMart</h1>
      </div>

      <div className="categories">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Men's</Link>
        <Link to="/womens">Womens's</Link>
        <Link to="/kids">Kid's</Link>
      </div>

      <div className="logos">
        <i className="bi bi-cart-check"></i>
        <i className="bi bi-person-circle"></i>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
