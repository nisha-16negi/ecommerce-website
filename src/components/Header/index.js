import { React } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to={"/"} className="logo">
          <img src="/logo.jpg" alt="logo" />
          <div>Style Cast</div>
        </Link>

        <Link to={"/cart"} className="cart-link">
          Go To Cart
        </Link>
      </div>
      <div className="divider"></div>
    </header>
  );
};

export default Header;
