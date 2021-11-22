import styled from "styled-components";
import { MdVerifiedUser } from "react-icons/md";
export const CardContainer = styled.div`
  height: 450px;
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  -webkit-box-shadow: 0px 4px 7px 0px rgba(50, 50, 50, 0.77);
  -moz-box-shadow: 0px 4px 7px 0px rgba(50, 50, 50, 0.77);
  box-shadow: 0px 4px 7px 0px rgba(50, 50, 50, 0.77);
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    width: 290px;
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    height: 350px;
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  flex: 0.8;
  width: 100%;
  border-radius: 20px 20px 0 0;
  background-size: cover;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center center;
`;

export const InfoContainer = styled.div`
  flex: 0.2;
  display: flex;
  width: 100%;
  padding: 5px 5px 0 10px;
  justify-content: 100%;
  align-items: flex-start;
  flex-direction: column;
`;

export const BasicContainer = styled.div`
  flex-direction: column;
  /* background-color: blue; */
  width: 100%;
  border-bottom: 1px solid rgba(60, 60, 60, 0.25);
  margin-bottom: 5px;
`;

export const Name = styled.label`
  font-size: 1.4rem;
  color: #fc6e20;
  font-weight: 600;
  @media screen and (max-width: 320px) {
    font-size:1.25rem;
  }
  @media screen and (max-width: 305px) {
    font-size:1rem;
  }
`;

export const Location = styled.p`
  font-size: 1rem;
  color: #424242;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size:0.85rem;
  }
  @media screen and (max-width: 305px) {
    font-size:0.75rem;
  }
`;
export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  height: 100%;
  /* background-color: red; */
  margin-left: 5px;
`;

export const Price = styled.label`
  font-size: 1rem;
  color: #424242;
  margin-right: 5px;
  @media screen and (max-width: 320px) {
    font-size:0.85rem;
  }
  @media screen and (max-width: 305px) {
    font-size:0.75rem;
  }
`;

export const Cost = styled.label`
  color: #fc6e20;
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;
  span {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 320px) {
    font-size:1.25rem;
    span {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 305px) {
    font-size:1rem;
    span{
      font-size: 0.75rem;
    }
  }
  }
`;

export const Size = styled.label`
  font-size: 1rem;
  color: #424242;
  white-space: nowrap;
  @media screen and (max-width: 320px) {
    font-size:0.85rem;
  }
  @media screen and (max-width: 305px) {
    font-size:0.75rem;
  }
`;

export const Verified = styled(MdVerifiedUser)`
  color: #42ba96;
  font-size: 1.5rem;
  margin-left: 5px;
  cursor: pointer;
    @media screen and (max-width: 320px) {
    font-size:0.85rem;
  }
  @media screen and (max-width: 305px) {
    font-size:0.85rem;
  }
`;
