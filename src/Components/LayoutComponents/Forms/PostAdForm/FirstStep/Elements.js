import styled from "styled-components";
import { motion } from "framer-motion";
import { Input, Radio, Select, Checkbox } from "antd";
const { Option } = Select;
export const StepContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BuyRentButton = styled(Radio.Button)`
  background-color: #424242;
  border: none;
  outline: none;
  margin-right: 1vw;
  color: #fff;
  opacity: 1;
  border-radius: 5px !important;
  border-left: none !important;
  min-width: 5vw;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 1vh;

  &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: #fc6e20;
    color: #fff;
    opacity: 1;
  }

  &:hover,
  :active,
  :focus {
    background-color: #fc6e20 !important;
    opacity: 1;
    color: #fff;
  }
  &::before {
    display: none !important ;
  }
`;

export const TextField = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  box-shadow: none;
  margin-bottom: 1vh;

  &:focus,
  :active {
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  &:hover {
    border: 1px solid #d9d9d9;
  }
`;

export const RadioButtonsContainer = styled(Radio.Group)`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

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

export const SubTypeCat = styled(Select)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  outline: none;
  margin-bottom: 1vh;

  & .ant-select-selector {
    padding: 10px !important;
    height: auto !important;
    border-radius: 12px !important;
    &:hover {
      border-color: #fc6e20 !important;
    }
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #fc6e20;
    box-shadow: none;
  }
`;

export const SubTypeOption = styled(Option)`
  background-color: #fff !important;
`;

export const CheckboxGroup = styled(Checkbox.Group)`
  width: 100%;
`;
export const CustomCheckBox = styled(Checkbox)`
  color: #545454;
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #fc6e20;
    border-color: #fc6e20;
  }
`;
