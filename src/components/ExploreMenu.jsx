import "./Styles/ExploreMenu.css";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  // Handle category selection
  const handleCategoryClick = (menuName) => {
    setCategory((prev) => (prev === menuName ? "All" : menuName));
  };

  return (
    <section className="explore-menu" id="explore-menu">
      <h1>Check out today’s flavors.</h1>

      <p className="explore-menu-text">
        Enjoy a variety of delicious dishes made with the finest ingredients.
      </p>

      {/* MENU LIST */}
      <div className="explore-menu-list">
        {menu_list.map((item) => {
          const isActive = category === item.menu_name;

          return (
            <button
              key={item.menu_name}
              type="button"
              className={`explore-menu-list-item ${isActive ? "active" : ""}`}
              onClick={() => handleCategoryClick(item.menu_name)}
              aria-label={item.menu_name}
            >
              <img
                className={isActive ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
                loading="lazy"
              />

              <p>{item.menu_name}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreMenu;
