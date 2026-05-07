import { useState, useCallback } from "react";
import "./Styles/Home.css";

import Header from "../components/Header/Header";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  const handleCategoryChange = useCallback((value) => {
    setCategory(value);
  }, []);

  return (
    <>
      <Header onCategoryChange={handleCategoryChange} />

      <ExploreMenu category={category} setCategory={handleCategoryChange} />

      <FoodDisplay category={category} />
    </>
  );
};

export default Home;
