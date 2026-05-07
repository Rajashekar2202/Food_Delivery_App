import "./Header.css";

const Header = ({ setCategory }) => {
  // Handle menu scroll
  const handleViewMenu = () => {
    setCategory("All");

    const exploreMenu = document.getElementById("explore-menu");

    if (exploreMenu) {
      exploreMenu.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <section className="header-contents">
        <h1>Order your favorite food here</h1>

        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p>

        <button
          type="button"
          className="view-menu-btn"
          onClick={handleViewMenu}
        >
          View Menu
        </button>
      </section>
    </header>
  );
};

export default Header;
