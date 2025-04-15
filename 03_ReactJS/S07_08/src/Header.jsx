import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="brand">
        <h1>Dude'sMart</h1>
      </div>

      <div className="categories">
        <a href="/">Home</a>
        <a href="/electronics">Electronics</a>
        <a href="">Jewelery</a>
        <a href="">Men's</a>
        <a href="">Womens's</a>
        <a href="">Kid's</a>
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
