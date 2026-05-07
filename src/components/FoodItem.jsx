import { useContext } from "react";
import "./Styles/FoodItem.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  // Add item
  const handleAdd = () => {
    addToCart(id);
  };

  // Remove item
  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <article className="food-item">
      {/* IMAGE */}
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={image}
          alt={name}
          loading="lazy"
        />

        {/* ADD BUTTON */}
        {itemCount === 0 ? (
          <button
            type="button"
            className="add-btn"
            onClick={handleAdd}
            aria-label={`Add ${name} to cart`}
          >
            <img src={assets.add_icon_white} alt="Add item" />
          </button>
        ) : (
          <div className="food-item-counter">
            <button
              type="button"
              onClick={handleRemove}
              aria-label={`Remove ${name}`}
            >
              <img src={assets.remove_icon_red} alt="Remove item" />
            </button>

            <p>{itemCount}</p>

            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Increase ${name} quantity`}
            >
              <img src={assets.add_icon_green} alt="Increase quantity" />
            </button>
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <div>
            <p className="name">{name}</p>
            <p className="price">₹{price}</p>
          </div>

          <img
            src={assets.rating_starts}
            alt="Food rating"
            className="rating-stars"
          />
        </div>

        <p className="food-item-desc">{description}</p>
      </div>
    </article>
  );
};

export default FoodItem;
