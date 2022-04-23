import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ( {isOpen, toggle} ) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/webdev" onClick={toggle}>WebDev</SidebarLink>
          <SidebarLink to="/data" onClick={toggle}>Data</SidebarLink>
          <SidebarLink to="/uxui" onClick={toggle}>UX/UI</SidebarLink>
          <SidebarLink to="/cyber" onClick={toggle}>CyberSec</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
