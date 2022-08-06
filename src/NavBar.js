import Menu from "./Menu";
import React, { useState, useRef } from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  RiCloseLine,
  RiMenu2Line,
} from "./Logos";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navLinks = useRef(null);

  // second method using ref
  const menuToggle = (e) => {
    console.log(e);
    if (toggleMenu === false) {
      navLinks.current.classList.add("addHeight");
      console.log(navLinks.current);
    } else {
      navLinks.current.classList.remove("addHeight");
    }
  };
  //

  return (
    <>
      <nav>
        <div className="navMenu">
          <h3>Keevah</h3>
          <div className="menuItem">
            {toggleMenu ? (
              <RiCloseLine
                onClick={() => {
                  menuToggle();
                  setToggleMenu(false);
                }}
              />
            ) : (
              <RiMenu2Line
                onClick={() => {
                  menuToggle();
                  setToggleMenu(true);
                }}
              />
            )}
          </div>
        </div>
        {/* first method having two menu for mobile and desktop. There is no need to create menuToggle function here */}
        {/* {toggleMenu && (
            <div className="menuLinks">
              <Menu />
            </div>
          )} */}

        <div className="navLink" ref={navLinks}>
          <Menu />
        </div>

        <div className="socialLinks">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaBehance />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
