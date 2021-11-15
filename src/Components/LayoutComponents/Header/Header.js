import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarContainer,
  NavBanner,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  PostAddbtn,
  SignInBtn
} from "./HeaderElements";

import { Sling as Hamburger } from 'hamburger-react'
const Nav = ({ isOpen,toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Navbar scrollNav={scrollNav}>
      <NavbarContainer>
        <NavBanner>
          Real<span style={{ color: "#424242" }}>Et</span>
        </NavBanner>
        <MobileIcon scrollNav={scrollNav}>
          <Hamburger size={25} color="#FC6E20" toggled={isOpen} toggle={toggle} />
        </MobileIcon>
        <NavMenu>
          <NavItem scrollNav={scrollNav}>
            <NavLinks to="/signup">Buy a Property</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks to="/signup">Rent a Property</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks to="/signup">Cost Calculator</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks to="/signup">Book a Builder</NavLinks>
          </NavItem>
          <NavBtn>
            <PostAddbtn to="/signup">Post Ad</PostAddbtn>
          </NavBtn>
          <SignInBtn to="/signin">Sign In</SignInBtn>
        </NavMenu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Nav;
