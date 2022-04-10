import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">IronJobs</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/webdev">WebDev</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/data">Data</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/uxui">UX/UI</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cyber">CyberSec</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
