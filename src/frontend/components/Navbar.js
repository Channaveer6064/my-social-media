import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
        <p className="nav-header">
          <span style={{ color: "var(--primary-color)" }}>My</span>Social
        </p>
      </NavLink>
    </div>
  );
};

export { Navbar };
