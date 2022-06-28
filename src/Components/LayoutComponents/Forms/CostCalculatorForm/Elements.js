import styled from "styled-components";
import { Radio, Input, Button } from "antd";
export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const RadioButtonsContainer = styled(Radio.Group)`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const GrayFinishBtn = styled(Radio.Button)`
  background-color: #424242;
  border: none;
  outline: none;
  margin-right: 0.5vw;
  color: #fff;
  opacity: 1;
  border-radius: 5px !important;
  border-left: none !important;
  width: 100%;
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
  width: 100%;
  &:focus,
  :active {
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  &:hover {
    border: 1px solid #d9d9d9;
  }
`;
export const RadioBtnContainer = styled(Radio.Group)`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width:768px){
    flex-direction: row;
  }
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

export const CalculateBtn = styled(Button)`
  background-color: #fc6e20;
  border: none;
  color: #ffff;
  box-shadow: none;
  border-radius: 5px;
  height: 30px;
  min-width: 40px;
  margin-top: 3.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  &:hover {
    background-color: #fff;
    color: #fc6e20;
    border: 1px solid #fc6e20;
  }

  &:focus {
    background-color: #fc6e20;
    color: #ffff;
    border: none;
  }
`;
