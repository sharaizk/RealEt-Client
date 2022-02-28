import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const CardContainer = styled.div`
  height: 39.59398496240601vh;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 5px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 2500px) {
    height: 425px;
  }
  @media screen and (max-width: 1400px) {
    height: 450px;
  }
  @media screen and (max-width: 480px) {
    height: 150px;
    flex-direction: row;
  }
  @media screen and (max-width: 280px) {
    height: 100px;
  }
`;

export const ImgContainer = styled.div`
  flex: 0.6;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  @media screen and (max-width: 480px) {
    flex: 0.4;
    border-radius: 5px 0 0 5px;
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
  flex: 0.4;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px 10px 5px 10px;
  @media screen and (max-width: 480px) {
    flex: 0.6;
    padding: 10px 10px 5px 10px;
  }
`;
export const Title = styled.h3`
  color: #fc6e20;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 14px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
    line-height: 11px;
  }
`;
export const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: #424242;
  opacity: 75%;
  @media screen and (max-width: 480px) {
    font-size: 11px;
    line-height: 11px;
  }
  @media screen and (max-width: 280px) {
    font-size: 8px;
    line-height: 8px;
  }
`;
export const Description = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: auto;
  -webkit-box-orient: vertical;
  opacity: 90%;
  text-align: justify;
  text-justify: inter-word;
  @media screen and (max-width: 480px) {
    font-size: 11px;
    line-height: 11px;
  }
  @media screen and (max-width: 280px) {
    font-size: 8px;
    line-height: 8px;
  }
`;
export const SeeMore = styled(NavLink)`
  color: #fc6e20;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #fc6e20;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
  @media screen and (max-width: 280px) {
    font-size: 8px;
  }
`;
