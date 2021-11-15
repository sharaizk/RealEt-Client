import React from "react";
import { SidebarContainer,SidebarWrapper,SidebarMenu,SidebarLink,SidebarBtn1,  Icon,
  CloseIcon } from "./SidebarElemets";
const Sidebar = ({ isOpen,toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/signup">
            Buy a Property
          </SidebarLink>
          <SidebarLink to="/signup">
            Rent a Property
          </SidebarLink>
          <SidebarLink to="/signup">
            Cost Calculator
          </SidebarLink>
          <SidebarLink to="/signup">
            Book a Builder
          </SidebarLink>
          <SidebarBtn1 to="/signup">
            Post Ad
          </SidebarBtn1>
          <SidebarBtn1 to="/signin">
            Sign In
          </SidebarBtn1>
        </SidebarMenu>
      </SidebarWrapper>
      
    </SidebarContainer>
  );
};

export default Sidebar;
