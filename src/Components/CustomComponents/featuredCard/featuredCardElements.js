import styled from "styled-components";

export const CardContainer = styled.div`
  height: 48.33512352309345vh;
  width: 27.53813104189044vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
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
`;

export const ImgContainer = styled.div`
  flex: 0.8;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;
export const Img = styled.img`
  flex: 1;
  height: 100%;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

`;
export const DescContainer = styled.div`
  flex: 0.2;
`;
