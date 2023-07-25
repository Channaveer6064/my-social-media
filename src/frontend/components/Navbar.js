import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <h1 className="nav-header">
        <span style={{ color: "var(--primary-color)" }}>My</span> Social
      </h1>
    </div>
  );
};

export { Navbar };
