import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import menu from "../assets/images/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    
      <nav className="navbar w-100 justify-content-center">
        <div className="deskTopMenu ">
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
            to="about"
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
            Skills
          </Link>
          <Link
            to="portfolio"
            className="deskTopMenuItemList"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-150}
            duration={500}
          >
            Portfolio
          </Link>
        </div>
               {/* <img
          className="mobMenu"
          src={menu}
          alt="menu"
          onClick={() => setShowMenu(!showMenu)}
        /> */}
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
            className="listItem"
            to="works"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-100}
            duration={500}
            onClick={() => setShowMenu(!showMenu)}
          >
            Skills
          </Link>
          <Link
            to="portfolio"
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
