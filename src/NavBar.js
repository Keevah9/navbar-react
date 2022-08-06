import Menu from "./Menu";
import React, {useState} from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  RiCloseLine,
  RiMenu2Line,
} from './Logos'

const NavBar=()=>{
    const [toggleMenu, setToggleMenu] = useState(false)
  
    return (
      <>
        <nav>
          <div className="navMenu">
            <h3>Keevah</h3>
            <div className="menuItem">
              {toggleMenu ? (
                <RiCloseLine
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                />
              ) : (
                <RiMenu2Line onClick={() => setToggleMenu(true)} />
              )}
            </div>
          </div>
          {toggleMenu && (
            <div className="menuLinks" >
              <Menu/>
            </div>
          )}
          <div className="menuCon">
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
}

export default NavBar