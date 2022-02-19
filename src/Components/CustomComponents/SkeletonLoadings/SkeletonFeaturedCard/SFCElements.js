import styled, { keyframes } from "styled-components";
export const CardContainer = styled.div`
  height: 48.33512352309345vh;
  width: 14.635444385311336vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 2560px) {
    height: 700px;

    width: 400px;
  }
  @media screen and (max-width: 1400px) {
    height: 500px;
    width: 265px;
  }
  @media screen and (max-width: 768px) {
    height: 44.575725026852844vh;
    width: 29.53813104189044vh;
  }
  @media screen and (max-width: 480px) {
    height: 48.33512352309345vh;
    width: 27.926960257787325vh;
  }
  @media screen and (max-width: 360px) {
    height: 320px;
    width: 190px;
  }
  @media screen and (max-width: 320px) {
    height: 260px;
    width: 170px;
  }
  @media screen and (max-width: 280px) {
    height: 230px;
    width: 140px;
  }
`;
const ShimmerAnimation = keyframes`
    0%{
        transform: translateX(-150%);
    }
    50%{
        transform: translateX(-60%);
    }
    100%{
        transform: translateX(150%);
    }
`;
export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${ShimmerAnimation} 2.5s infinite;
`;
export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  transform: skewX(-20deg);
`;

export const ImgContainer = styled.div`
  flex: 0.8;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  background-color: #ddd;
`;

export const DescContainer = styled.div`
  flex: 0.2;
  padding: 7px 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 7px 10px;
  }
  @media screen and (max-width: 280px) {
    padding: 7px 10px;
  }
`;
export const TopDesc = styled.div`
  flex: 0.4;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const BottomDesc = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
`;
export const PropertyTitle = styled.div`
  height: 19px;
  background-color: #ddd;
  margin-bottom: 5px;
  @media screen and (max-width: 480px) {
    height: 18px;
  }
  @media screen and (max-width: 280px) {
    height: 12px;
  }
`;
export const PropertyCity = styled.div`
  color: #424242;
  height: 16px;
  background-color: #ddd;
  @media screen and (max-width: 480px) {
    height: 14px;
  }
  @media screen and (max-width: 280px) {
    height: 11px;
  }
`;

export const Price = styled.div`
  height: 25px;
  flex: 0.7;
  background-color: #ddd;
  @media screen and (max-width: 280px) {
    height: 12px;
  }
`;
export const PropertyPublish = styled.div`
  flex: 0.3;
  height: 25px;
  background-color: #ddd;
  @media screen and (max-width: 280px) {
    height: 10px;
  }
`;
