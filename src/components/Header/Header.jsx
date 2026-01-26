import React from "react";
import "./Header.css";

const Header = ({ setCategory }) => {
  return (
    <header className="header">
      <section className="header-contents">

        <h1>Order your favorite food here</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
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
      </section>
    </header>
  );
};

export default Header;
