import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15vw;

  @media screen and (max-width: 1400px) {
    padding: 0 10vw;
  }
`;
export const LinksContainer = styled.div`
  background-color: #fca779;
  /* padding: 0.5vh; */
  border-radius: 8px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 10px 5px -2px rgba(0, 0, 0, 0.35);
`;
export const LinkBtn = styled(NavLink)`
  color: #424242;
  font-size: 0.9rem;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
  margin-bottom: 1vh;
  display: flex;
  padding: 1.05vh 1vh;
  justify-content: baseline;
  align-items: center;
  & > svg {
    margin-right: 0.6em;
  }
  &:hover {
    color: #424242;
    background-color: rgba(66, 66, 66, 0.15);
    border-radius: 8px 0 0 0;
  }
`;
