import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/images/logo.png";
import contactImg from "../assets/images/contact.png";
import { Link } from "react-scroll";
import menu from "../assets/images/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="deskTopMenu">
          <Link
            to="intro"
            spy={true}
            smooth={true}
            activeClass="active"
            className="deskTopMenuItemList"
            offset={-100}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="deskTopMenuItemList"
            to="skills"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            to="works"
            className="deskTopMenuItemList"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-150}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            to="clients"
            className="deskTopMenuItemList"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-200}
            duration={500}
          >
            Clients
          </Link>
        </div>
        <button
          className="desTopMenuButton"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
        <img
          className="mobMenu"
          src={menu}
          alt="menu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            to="intro"
            spy={true}
            smooth={true}
            activeClass="active"
            className="listItem"
            offset={-100}
            duration={500}
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
          </Link>
          <Link
            className="listItem"
            to="skills"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-100}
            duration={500}
            onClick={() => setShowMenu(!showMenu)}
          >
            About
          </Link>
          <Link
            to="works"
            className="listItem"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-150}
            duration={500}
            onClick={() => setShowMenu(!showMenu)}
          >
            Portfolio
          </Link>
          <Link
            to="clients"
            className="listItem"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-200}
            duration={500}
            onClick={() => setShowMenu(!showMenu)}
          >
            Clients
          </Link>
          <Link
            to="contact"
            className="listItem"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-200}
            duration={500}
            onClick={() => setShowMenu(!showMenu)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
