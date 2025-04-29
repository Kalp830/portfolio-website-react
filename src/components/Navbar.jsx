import React from "react";
import "./navbar.css";
import logo from "../assets/images/logo.png";
import contactImg from "../assets/images/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="deskTopMenu">
          <Link to="/" activeClass="active" className="deskTopMenuItemList">
            Home
          </Link>
          <Link to="/about" className="deskTopMenuItemList">
            About
          </Link>
          <Link to="/portfolio" className="deskTopMenuItemList">
            Portfolio
          </Link>
          <Link to="clients" className="deskTopMenuItemList">
            Clients
          </Link>
        </div>
        <button className="desTopMenuButton">
          <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
      </nav>
    </>
  );
};

export default Navbar;
