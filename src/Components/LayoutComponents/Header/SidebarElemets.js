import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: none;
  @media screen and (max-width: 870px) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fc6e20;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 70px);
  text-align: center;
  font-family: "Poppins", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
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
  :hover {
    color: #424242;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const SidebarBtn1 = styled(NavLink)`
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
  :hover {
    color: #424242;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
export const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  align-self: center;
`;
export const Name = styled.h4`
  color: #fff;
  font-weight: 400;
  margin-left: 0.5vw;
  margin-top: 1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    margin-left: 1.5vw;
  }
`;

export const DropDownArea = styled.div`
  background-color: #fff;
  border: 1px solid #545454;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 2vh 2vw;
`;

export const DropDownLink = styled(NavLink)`
  color: #424242;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: #424242;
  }
`;
export const Button = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
