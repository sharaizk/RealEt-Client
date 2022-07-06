import styled, { keyframes } from "styled-components";
import builderBG from "../../assets/images/buildbg.jpg";
import { Link } from "react-router-dom";
const animatedBackground = keyframes`
  0%{
    opacity: 0.25;
    filter: blur(0px);
  }
  100%{
    filter: blur(5px);
    opacity: 1;
  }
`;

const trackingin = keyframes`  0% {
  letter-spacing: -0.5em;
  -webkit-filter: blur(12px);
          filter: blur(12px);
  opacity: 0;
}
100% {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  opacity: 1;
}`;

export const BuilderScreenContainer = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;
  position: relative;
  min-height: 100vh;
  max-height: 100%;
  padding-top: 14vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const AdvanceSearchContainer = styled.div`
  width: 100%;
  padding: 0 20%;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: height 0.5s ease-in;
  &::before {
    content: "";
    background-image: url(${builderBG});
    background-size: cover;
    filter: blur(5px);
    background-position: center;
    position: absolute;
    background-repeat: no-repeat;
    border-radius: 10px;
    animation: ${animatedBackground} 1s 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    padding: 0 15%;
  }
  @media screen and (max-width: 480px) {
    padding: 0 5%;
  }
`;

export const PageTtile = styled.h3`
  font-size: 1.75rem;
  color: #fff;
  letter-spacing: 3%;
  font-weight: 400;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Poppins";
  -webkit-animation: ${trackingin} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: ${trackingin} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const BuilderCardContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 2vh 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: #424242;
  font-weight: 400;
  opacity: 0.5;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, auto);
  grid-column-gap: 1em;
  grid-row-gap: 3em;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
    grid-row-gap: 3em;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, auto);
    grid-row-gap: 3em;
  }
`;

export const PaginationContainor = styled.div`
  margin-top: 2vh;
  align-self: flex-end;
`;

export const PortfolioContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const PortfolioLink = styled(Link)`
  color: #424242;
  text-decoration: none;
  background-color: #f2efe7;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 2vh;
  & p {
    margin-bottom: 0;
    margin-left: 0.5vw;
  }
  &:hover {
    color: #f56e28;
  }
`;