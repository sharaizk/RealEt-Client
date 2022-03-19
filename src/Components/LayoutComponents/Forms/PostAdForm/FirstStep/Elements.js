import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, Input, Radio } from "antd";
export const StepContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BuyRentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden !important;
`;

export const BuyRentButton = styled(Button)`
  background-color: ${({ $active }) => ($active ? "#FC6E20" : "#424242")};
  border: none;
  outline: none;
  margin-right: 1vw;
  color: #fff;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  border-radius: 5px;
  min-width: 5vw;

  &:hover,
  :active,
  :focus {
    background-color: ${({ $active }) => ($active ? "#FC6E20" : "#424242")};
    opacity: ${({ $active }) => ($active ? 1 : 0.5)};
    color: #fff;
  }
`;
export const FieldsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2vh 0;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TextField = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  box-shadow: none;
  &:focus,
  :active {
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  &:hover {
    border: 1px solid #d9d9d9;
  }
`;
export const FieldLabel = styled.label`
  font-size: 1rem;
  color: #424242;
`;

export const RadioButtonsContainer = styled(Radio.Group)`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2vh 0;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const RadioBtn = styled(Radio)`
  font-size: 1.1rem;
  color: #424242;
  @media screen and (max-width: 280px) {
    font-size: 0.7rem;
  }
`;

export const SubTypeCat = styled.select`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2vh 0;
  background:transparent;
  outline:none;
  border: 1px solid #d9d9d9;
  border-radius:10px;
  padding:10px;
  }
`;

export const SubTypeOption = styled.option`
  background-color: #fff !important;
`;
