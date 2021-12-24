import styled, { keyframes } from "styled-components";
import heroBG from "../../../assets/images/heroBG.jpg";

const animatedBackground = keyframes`
  0%{
    opacity: 0.25;
    transform: scale(1.25);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
`

export const LandingScreenContainer = styled.section`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;


  &::before {
    content: "";
    background-image: url(${heroBG});
    background-size: cover;
    background-position: center center;
    position: absolute;
  animation: ${animatedBackground} 1s 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow:hidden;
    z-index: -1;
  }
`;

// section1:
export const SectionContainer = styled.div`
  height: auto;
  width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const BuyandSell = styled.h3`
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: 3%;
  font-weight: 400;
  text-align: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  @media screen and (max-width: 760px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;
