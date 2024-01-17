import React from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => (
  <div className="app-header">
    <div>
      <img className="logo" src={LOGO_URL} />
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
export default Header;