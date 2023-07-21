import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarGlass}></div>
      <div className={classes.logo}>PhotoLab</div>
      <ul className={classes.navLinks}>
        <li>
          <NavLink
            to="/gallery"
            className={classes.navLink}
            activeclasnName={classes.active}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourite"
            className={classes.navLink}
            activeclasnName={classes.active}
          >
            Favourite
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={classes.navLink}
            activeclasnName={classes.active}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
