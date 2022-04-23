import React from "react";
import { FaBars } from "react-icons/fa";
import mainlogo from "../../Images/jobs-logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoImg,
} from "./NavbarElements";

const Navbar = ( {toggle} ) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <LogoImg src={mainlogo} alt="main logo">
              </LogoImg>Ironjobs.
          </NavLogo>
          <MobileIcon onClick={toggle}>
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
