import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const Navbar = styled.nav`
  background:#FFF;
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  transition: 0.2s height ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    transition: 0.2s height ease;
  }
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
  font-family: "Poppins",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #FC6E20;
  cursor: pointer;

`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    color: #424242;
    top: 0;
    right: 0;
    transform: translate(-100%, 35%);
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
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: ${({ scrollNav }) => (!scrollNav ? "80px" : "70px")};
  transition: 0.2s height ease;
`

export const NavLinks = styled(NavLink)`
  color: #424242;
  font-family: "Poppins",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.05s ease-in;
  &.active {
    border-bottom: 3px solid #FC6E20;
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
  background-color: #fff;
  white-space: nowrap;
  border: 1px solid #424242;
  padding: 8px 16px;
  color: #424242;
  font-size: 1rem;
  outline: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Poppins",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-right: 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #424242;
    color: #ffff;
  }
  @media screen and (max-width:1000px){
    padding: 8px 15px;
    margin-right: 10px;
  }
`;

export const SignInBtn = styled(NavLink)`
  border-radius: 5px;
  background-color: #FC6E20;
  white-space: nowrap;
  padding: 8px 16px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: 1px solid #FC6E20;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "Poppins",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid #FC6E20;
    background-color: #FFFF;
    color: #FC6E20;
  }
  @media screen and (max-width:1000px){
    padding: 8px 15px;
  }
`