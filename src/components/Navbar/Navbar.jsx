import { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const hasItemInCart = getTotalCartAmount() > 0;

  return (
    <div className="navbar">

      <Link to="/" aria-label="Go to homepage">
        <img src={assets.logo} alt="Tomato logo" className="logo" />
      </Link>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
        
      </div>
    </div>
  );
};

export default Navbar;
