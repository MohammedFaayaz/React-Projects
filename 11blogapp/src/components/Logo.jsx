import React from "react";
import logo from "../assets/logo.jpg"; // Importing the logo image

function Logo({ width = "100%", maxWidth = "150px" }) {
  return (
    <img
      src={logo}
      alt="Logo"
      className="img-fluid mw-100 h-auto shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
      style={{ width, maxWidth }}
    />
  );
}

export default Logo;
