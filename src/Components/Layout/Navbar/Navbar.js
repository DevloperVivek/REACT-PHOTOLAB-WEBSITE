import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../../assets/photolab2.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${classes.navbar} ${scrolling ? classes.scrolled : ""}`}>
      <div className={classes.navbarGlass}></div>
      <img className={classes.logo} src={logo} />
      <div className={classes.mobileMenuIcon} onClick={toggleMobileMenu}>
        <div
          className={`${classes.bar} ${mobileMenuOpen ? classes.open : ""}`}
        />
        <div
          className={`${classes.bar} ${mobileMenuOpen ? classes.open : ""}`}
        />
        <div
          className={`${classes.bar} ${mobileMenuOpen ? classes.open : ""}`}
        />
      </div>
      <ul
        className={`${classes.navLinks} ${
          mobileMenuOpen ? classes.mobileMenuOpen : ""
        }`}
      >
        <li className={classes.exploreUploadAccount}>
          <NavLink to="/explore" className={classes.navLink}>
            Explore
          </NavLink>
          <NavLink to="/upload" className={classes.navLink}>
            Upload
          </NavLink>
          <NavLink to="/account" className={classes.navLink}>
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
