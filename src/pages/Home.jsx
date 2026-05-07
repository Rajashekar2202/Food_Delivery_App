import { useState, useCallback } from "react";
import "./Styles/Home.css";

import Header from "../components/Header/Header";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  /* CATEGORY CHANGE */
  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  return (
    <main className="home">
      <Header onCategoryChange={handleCategoryChange} />

      <ExploreMenu category={category} setCategory={handleCategoryChange} />

      <FoodDisplay category={category} />
    </main>
  );
};

export default Home;
