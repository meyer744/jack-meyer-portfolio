import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
 
const Navbar = () => {
    return (
      <ResponsiveMenu
        menuOpenButton={<FaBars/>}
        menuCloseButton={<FaWindowClose />}
        changeMenuOn="500px"
        largeMenuClassName="desktop-menu"
        smallMenuClassName="mobile-menu"
        menu={
            <div>
            <div>
            <h1 className="nav-title">Jack Meyer</h1>
            </div>
          <ul>
            <li>Home</li>
            <li>Resume</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          </div>
        }
      />
    );
  };

export default Navbar;