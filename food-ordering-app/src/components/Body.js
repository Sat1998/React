import React, { useState } from "react";
import { cardApiData } from "../utils/data";
import FoodItemCard from "./FoodItemCard";
const Body = () => {
  const [filteredResturant, setFilteredResturant] = useState(cardApiData);
  const handleTopRatedRestrurant = () => {
    const filteredTopRatedRestruRant = cardApiData.filter(
      (data) => data.info.avgRatingString > 4
    );
    setFilteredResturant(filteredTopRatedRestruRant);
  };

  return (
    <div className="body">
      <div className="Search">
        <input />
        <button
          className="filter-btn"
          onClick={() => handleTopRatedRestrurant()}
        >
          Top rated Button
        </button>
      </div>
      <div className="food-items-conatiner">
        {filteredResturant.map((data) => (
          <FoodItemCard key={data.info.id} cardData={data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
