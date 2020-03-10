import React from "react";
import "./MenuBar.css";
import { NavLink } from "react-router-dom";
const MenuBar = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <NavLink
          className="nav-list-item-link"
          activeClassName="nav-list-item-link-active"
          to="/docs"
        >
          Docs
        </NavLink>
      </li>
      <li className="nav-list-item">
        {" "}
        <NavLink
          className="nav-list-item-link"
          activeClassName="nav-list-item-link-active"
          to="/items"
        >
          Items
        </NavLink>
      </li>
      <li className="nav-list-item">
        <NavLink
          className="nav-list-item-link"
          activeClassName="nav-list-item-link-active"
          to="/about"
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MenuBar;
