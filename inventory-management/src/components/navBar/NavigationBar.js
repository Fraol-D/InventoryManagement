// src/components/navBar/NavigationBar.js
import React from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaToggleOn,
  FaFlagUsa,
} from "react-icons/fa";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span>ShopMan</span>
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search product, supplier, order" />
        </div>
      </div>
      <div className="navbar-center">
        <a href="#dashboard">Dashboard</a>
        <a href="#inventory">Inventory</a>
        <a href="#reports">Reports</a>
        <a href="#suppliers">Suppliers</a>
        <a href="#orders">Orders</a>
        <a href="#manage-store">Manage Store</a>
      </div>
      <div className="navbar-right">
        <FaToggleOn className="icon" />
        <select className="language-select">
          <option value="en">EN</option>
        </select>
        <FaFlagUsa className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default NavigationBar;
