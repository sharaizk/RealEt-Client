import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  background: ${({ scrollNav }) => (!scrollNav ? "transparent" : "#FFF")};
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: 0.2s all ease-out;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.2s all ease;
  }
`;

export const Brand = styled.label`
  color: #fc6e20;
  cursor: pointer;
  font-family: "ABeatByKaiRegular", "Poppins";
  letter-spacing: 1.5px;
`;
export const BrandSpan = styled.span`
  color: ${({ scrollNav }) => (!scrollNav ? "#FFF" : "#424242")};
  cursor: pointer;
  font-family: "ABeatByKaiRegular", "Poppins";
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  z-index: 1;
  width: 100%;
  padding: 0 50px;
`;

export const NavBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  color: #fc6e20;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    transition: 0.2s translate ease;
    display: block;
    position: absolute;
    color: #424242;
    top: 0;
    right: 0;
    transform: ${({ scrollNav }) =>
      !scrollNav ? "translate(-100%, 35%)" : "translate(-100%, 25%)"};
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 0px !important;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};

  transition: 0.2s height ease;
`;

export const NavLinks = styled(NavLink)`
  color: ${({ scrollNav }) => (!scrollNav ? "#fff" : "#424242")};
  font-family: "Poppins", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  display: flex;
  font-size: 14px;
  font-weight: 300;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  transition: all 0.05s ease-in;
  :hover {
    color:${({ scrollNav }) => (!scrollNav ? "#fff" : "#424242")} !important;
    border-bottom: 3px solid #fc6e20;
  }
  &.active {
    border-bottom: 3px solid #fc6e20;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const PostAddbtn = styled(NavLink)`
  border-radius: 5px;
  white-space: nowrap;
  border: 1px solid ${({ scrollNav }) => (!scrollNav ? "#fff" : "#424242")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 31px;
  color: ${({ scrollNav }) => (!scrollNav ? "#fff" : "#424242")};
  font-size: 0.75rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Poppins", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  margin-right: 15px;
  &:hover{
    color: ${({ scrollNav }) => (!scrollNav ? "#fff" : "#424242")} !important;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 8px;
  }
`;

export const SignInBtn = styled(NavLink)`
  border-radius: 5px;
  background-color: #fc6e20;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.971793507184673vw;
  height: 31px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: 1px solid #fc6e20;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Poppins", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  &:hover {
    color: #fff;
  }
`;
