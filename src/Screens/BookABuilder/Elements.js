import styled, { keyframes } from "styled-components";
import builderBG from "../../assets/images/buildbg.jpg";
const animatedBackground = keyframes`
  0%{
    opacity: 0.25;
  }
  100%{
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
  height: 100vh;
  padding-top: 14vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const AdvanceSearchContainer = styled.div`
  width: 100%;
  padding: 0 20%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
    height: 100%;
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
