import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: none;
  @media screen and (max-width:870px){
  position: fixed;
  z-index: 999;
  width: 100%;
  height:100%;
  background: #FC6E20;
  display: grid;
  align-items: center;

  top: 0%;
  right: 0%;
  transition: 0.3s ease;
  opacity: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  right: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 70px);
  text-align: center;
  font-family: "Poppins",'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and(max-width:820px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(NavLink)`

  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  @media screen and (max-width:480px){
    font-size: 1.25rem;
  }
`;

export const SidebarBtn1=styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width:480px){
    font-size: 1.25rem;
  }
`