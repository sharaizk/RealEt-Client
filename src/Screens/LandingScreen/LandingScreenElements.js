import styled from "styled-components";
import heroBG from "../../assets/images/heroBG.jpg";

export const LandingScreenContainer = styled.section`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-image: url(${heroBG});
  background-size: cover;
  background-position: center center;
`;

export const SectionContainer = styled.div`
  height: auto;
  width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const BuyandSell = styled.h3`
  font-size: 3.3rem;
  color: #fff;
  letter-spacing: 3%;
  font-weight: 300;
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
