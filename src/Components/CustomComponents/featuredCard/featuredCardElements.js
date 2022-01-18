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
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover{
    box-shadow: 0px 1px 5px 5px rgba(0,0,0,0.3);
-webkit-box-shadow: 0px 1px 5px 5px rgba(0,0,0,0.3);
-moz-box-shadow: 0px 1px 5px 5px rgba(0,0,0,0.3);
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

export const ImgContainer = styled.div`
  flex: 0.8;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

export const VerifiedTag = styled.div`
  position: absolute;
  top: 0%;
  left: 75%;
  right: 0%;
  bottom: 0%;
  height: 55px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  background-color: #333333;

  @media screen and (max-width: 380px) {
    height: 50px;
    width: 40px;
    left: 70%;
  }
  @media screen and (max-width: 280px) {
    height: 40px;
    width: 30px;
    left: 65%;
  }
`;
export const VerifiedLogo = styled.img`
  height: 18px;
  width: 16px;
  @media screen and (max-width: 380px) {
    height: 16px;
    width: 14px;
  }
  @media screen and (max-width: 280px) {
    height: 14px;
    width: 12px;
  }
`;
export const VerifiedText = styled.label`
  font-size: 8px;
  color: #fff;
  font-weight: 300;
  @media screen and (max-width: 380px) {
    font-size: 6px;
  }
  @media screen and (max-width: 280px) {
    font-size: 6px;
  }
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
`;
export const BottomDesc = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
`;
export const PropertyTitle = styled.h3`
  color: #fc6e20;
  font-size: 19px;
  line-height: 19px;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 18px;
  }
  @media screen and (max-width: 280px) {
    font-size: 12px;
    line-height: 12px;
  }
`;
export const PropertyCity = styled.label`
  color: #424242;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 14px;
  }
  @media screen and (max-width: 280px) {
    font-size: 11px;
    line-height: 11px;
  }
`;

export const Price = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  height: 100%;
  flex: 0.7;
  & > p {
    color: #424242;
    opacity: 75%;
    margin-bottom: 0.3em;
  }
  & > label {
    color: #159386;
    font-size: 20px;
    @media screen and (max-width: 280px) {
      font-size: 11px;
      line-height: 11px;
    }
  }
  & > label > span {
    color: #333333;
    opacity: 50%;
    font-size: 14px;
    @media screen and (max-width: 280px) {
      font-size: 10px;
      line-height: 10px;
    }
  }
  @media screen and (max-width: 280px) {
    font-size: 12px;
    line-height: 12px;
  }
`;
export const PropertyPublish = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 0.3;
  text-align: center;
  font-weight: 400;
  color: #959595;
  font-family: "ABeatByKaiRegular";
  word-spacing: 100vw;
  font-size: 14px;
  line-height: 14px;
  @media screen and (max-width: 280px) {
    font-size: 10px;
    line-height: 10px;
  }
`;
