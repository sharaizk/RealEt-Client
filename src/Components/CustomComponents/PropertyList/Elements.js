import styled from "styled-components";
import { motion } from "framer-motion";
export const DescContainer = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 15px;
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 15px;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex: 0.3;
  height: 100%;

  /* @media screen and (max-width: 1280px) {
    flex: 0.4;
  } */
`;

export const InfoContainer = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 15px;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }
  & > .ant-row {
    width: 100%;
  }
`;

export const InfoDetail = styled.label`
  font-size: 0.8rem;
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const InfoTitle = styled.label`
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 600;
`;

export const ListDesc = styled.div`
  font-size: 0.8rem;
  text-align: left;
  color: #5a5a5a;
  margin: 0;
  margin-top: auto;
  height: 11ch;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
`;

export const ListLocation = styled.h6`
  color: #5a5a5a;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
`;

export const ListTitle = styled.h4`
  font-size: 1.7rem;
  line-height: 1.7rem;
  color: #545454;
  font-weight: 300;
`;
export const PriceTag = styled.div`
  background-color: #fc6e20;
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  margin-top: auto;
  font-size: 0.8rem;
`;

export const List = styled(motion.div)`
  width: 100%;
  height: 22.5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1280px) {
    height: 20vh;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const NotFound = styled.h5`
  color: #424242;
  font-size: 1rem;
`;
