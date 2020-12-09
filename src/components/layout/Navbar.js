import React from "react";
import PropTypes from "prop-types";

function Navbar({ title, icon }) {
  return (
    <nav className="navbar bg-primary">
      <i className={icon}></i>
      <h1>{title}</h1>
    </nav>
  );
}

Navbar.defaultProps = { title: "Github Finder", icon: "fab fa-github" };

Navbar.propsType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
