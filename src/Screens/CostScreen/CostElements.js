import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const CostScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-top: 8vh;
  height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  @media screen and (max-width: 1400px) {
    padding-top: 9vh;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 9vh;
  }
  @media screen and (max-width: 768px) {
    /* padding-top: 10vh; */
    height: 100%;
    padding-bottom: 2vh;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    padding-bottom: 2vh;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 2vh;
    width: 100%;
    height: 100%;
  }
`;

export const FormSection = styled(motion.div)`
  flex: 0.6;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin-bottom: 1vh;
  }
`;

export const AnimationSection = styled(motion.div)`
  flex: 0.6;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex: 0.4;
  }
`;

export const HistorySection = styled(motion.div)`
  flex: 0.3;
  max-height: 55vh;
  min-height: 55vh;
  border: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  border-radius: 10px;
  background-color: #ececec;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  padding: 2vh 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #424242;
  font-size: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 400;
  flex: 0.05;
`;

export const HistoryTitle = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px 11px 0 0;
  color: #fff;
  background-color: #f56e28;
`;

export const Card = styled.div`
  height: 6vh;
  padding: 0.7rem;
  width: 100%;
  margin-top: 1vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const CardTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0;
`;

export const CardSubTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0;
`;

export const CalculatingText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
`;
export const CalculatedPriceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CostImg = styled.img`
  flex: 0.5;
  margin-bottom: 2vh;
`;

export const CalculatedPriceTitle = styled.p`
  font-size: 1.6rem;
  color: #424242;
  text-align: center;

  & span {
    font-size: 1.2rem;
    font-weight: 500;
    color: #f56e28;
  }
`;

export const ResetBtn = styled.button`
  outline: none;
  border: none;
  background-color: #f56e28;
  padding: 0.5rem;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const BookBtn = styled(NavLink)`
  outline: none;
  border: none;
  background-color: #f56e28;
  padding: 0.5rem;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;