import styled, { keyframes } from "styled-components";
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
  }
`;

export const ImageContainer = styled.div`
  flex: 0.3;
  height: 100%;
  background-color: #ddd;
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

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #ddd;
  height: 0.8rem;
  margin-top: 0.2rem;
`;

export const ListDesc = styled.div`
  font-size: 0.8rem;
  background-color: #ddd;
  color: #ddd;
  margin: 0;
  margin-top: auto;
  @media screen and (max-width: 1400px) {
    margin-top: 0.2rem;
  }
`;

export const ListLocation = styled.div`
  height: 1rem;
  width: calc(1rem * 8);
  margin-top: 0.2rem;
  /* font-weight: 400; */
  background-color: #ddd;
`;

export const ListTitle = styled.div`
  height: 1.7rem;
  width: calc(1.7rem * 8);
  background-color: #ddd;
`;
export const PriceTag = styled.div`
  background-color: #ddd;
  color: #ddd;
  padding: 4px 8px;
  border-radius: 5px;
  margin-top: auto;
  font-size: 0.8rem;
  @media screen and (max-width: 1400px) {
    margin-top: 0.2rem;
  }
`;

export const List = styled(motion.div)`
  width: 100%;
  height: 22.5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1280px) {
    height: 18vh;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
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
