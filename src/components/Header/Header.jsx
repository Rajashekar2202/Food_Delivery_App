import React from "react";
import "./Header.css";

const Header = ({ setCategory }) => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your favorite food here</h2>
        <p>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p>
        <button
          onClick={() => {
            setCategory("All");
            document
              .getElementById("explore-menu")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
