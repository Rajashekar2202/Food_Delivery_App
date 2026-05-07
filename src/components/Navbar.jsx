import { useContext, useMemo } from "react";
import "./Styles/Navbar.css";

import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // ✅ avoid repeated calculations
  const hasItemInCart = useMemo(
    () => getTotalCartAmount() > 0,
    [getTotalCartAmount],
  );

  return (
    <header className="navbar">
      {/* LOGO */}
      <Link to="/" aria-label="Go to homepage">
        <img src={assets.logo} alt="Tomato logo" className="logo" />
      </Link>

      {/* RIGHT SECTION */}
      <nav className="navbar-right">
        {/* SEARCH */}
        <button className="icon-btn" aria-label="Search" type="button">
          <img src={assets.search_icon} alt="Search icon" />
        </button>

        {/* CART */}
        <div className="navbar-search-icon">
          <Link to="/cart" aria-label="Go to cart">
            <img src={assets.basket_icon} alt="Cart icon" />
          </Link>

          {hasItemInCart && <span className="dot"></span>}
        </div>

        {/* LOGIN */}
        <button
          className="signin-btn"
          onClick={() => setShowLogin(true)}
          type="button"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
