import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "antd";

export const StepContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.p`
  color: "#545454";
  font-size: 1rem;
`;

export const BtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled(Button)`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  border-color: ${({ bordercolor }) => bordercolor};
  color: ${({ textcolor }) => textcolor};
  font-weight: 500;
  font-size: 16px;
  height: 45px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  flex: 0.3;
  /* margin-top: 5px; */
  :hover,
  :active,
  :focus {
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    color: ${({ textcolor }) => textcolor};
    box-shadow: none !important;
    border-color: ${({ bordercolor }) => bordercolor};
  }
`;
