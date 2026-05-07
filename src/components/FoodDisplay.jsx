import { useContext } from "react";
import "./Styles/FoodDisplay.css";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter items
  const filteredFoods =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <section className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      {/* EMPTY STATE */}
      {filteredFoods.length === 0 ? (
        <p className="no-food-text">No food items available.</p>
      ) : (
        <div className="food-display-list">
          {filteredFoods.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FoodDisplay;
