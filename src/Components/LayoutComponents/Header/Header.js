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
  SignInBtn,
  Brand,
  BrandSpan
} from "./HeaderElements";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">
          <Brand>Real</Brand><BrandSpan scrollNav={scrollNav}>Et</BrandSpan>
          </NavLink>
        </NavBanner>
        <MobileIcon scrollNav={scrollNav}>
          <Hamburger size={25} color="#FC6E20" toggled={isOpen} toggle={toggle} />
        </MobileIcon>
        <NavMenu>
          <NavItem scrollNav={scrollNav}>
            <NavLinks scrollNav={scrollNav} to="/signup">Buy a Property</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks scrollNav={scrollNav} to="/signup">Rent a Property</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks scrollNav={scrollNav} to="/costcalculator">Cost Calculator</NavLinks>
          </NavItem>
          <NavItem scrollNav={scrollNav}>
            <NavLinks scrollNav={scrollNav} to="/signup">Book a Builder</NavLinks>
          </NavItem>
          <NavBtn>
            <PostAddbtn scrollNav={scrollNav} to="/signup">Post Ad</PostAddbtn>
          </NavBtn>
          <SignInBtn to="/signin">Sign In</SignInBtn>
        </NavMenu>
      </NavbarContainer>
    </Navbar>
  );
};

export default Nav;
