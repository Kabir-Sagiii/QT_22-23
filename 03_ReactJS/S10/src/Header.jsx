import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="brand">
        <h1>Dude'sMart</h1>
      </div>

      <div className="categories">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Map</Link>
        <Link to="/mens">Men's</Link>
        <Link to="/womens">Womens's</Link>
        <Link to="/kids">Kid's</Link>
      </div>

      <div className="logos">
        <i class="bi bi-cart-check"></i>
        <i class="bi bi-person-circle"></i>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Header;
