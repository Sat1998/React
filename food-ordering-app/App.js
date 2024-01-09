import React from "react";
import ReactDOM from "react-dom/client";
import { cardApiData } from "./data";
// 1. Header
//    i. Logo
//    ii. Nav Items
// 2. Body
//    i. Search
//    ii. Foods details container
//    - Food card
//          - image
//          -  name of the restrurant
//          -  ratings
//          -
//          -
//          -
// 3. Footer
//    i. Copy right
//    ii.Address
//    iii.Social media links
//    iv.contact info

const Header = () => (
  <div className="app-header">
    <div>
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const FoodItemCard = (props) => {
  const { cardData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    cardData.info;
  return (
    <div className="food-item-card">
      <img
        className="food-image-1"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{cardData.info.sla.slaString}</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="Search">
      <input />
      <button>Search</button>
    </div>
    <div className="food-items-conatiner">
      {cardApiData.map((data) => (
        <FoodItemCard key={data.info.id} cardData={data} />
      ))}
    </div>
  </div>
);

const AppComponet = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponet />);
