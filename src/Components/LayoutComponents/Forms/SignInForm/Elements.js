import styled from "styled-components";
import { Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import {PasswordInput} from 'antd-password-input-strength'
export const SignInFromContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: max-content;
  background-color: #fff;
  padding: 1rem 1rem;
  @media screen and (max-width: 768px) {
    z-index: 5;
  }
  @media screen and (max-height:600px) and (min-width:768px){
    padding: 0 0 10rem 0;
  }
`;

export const LogoImg = styled.img`
  height: 26.852846401718583vh;
  width: 26.852846401718583vh;
`;

export const InputField = styled(Input)`
  height: 50px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  :hover {
    border-color: #fc6e20 !important;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;
export const InputFieldPassword = styled(PasswordInput)`
  height: 50px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  :hover {
    border-color: #fc6e20 !important;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;
export const SubmitButton = styled(Button)`
  background-color: #fc6e20;
  border-color: #fc6e20;
  font-weight: 500;
  height: 45px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  margin-top: 5px;
  :hover,
  :active,
  :focus {
    background-color: #fff;
    color: #fc6e20;
    box-shadow: none !important;
    border: 1px solid #fc6e20;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;
export const BtnLink = styled(NavLink)`
  color: #424242;
  display: inline-block;
  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fc6e20;
    transition: width 0.3s cubic-bezier(0,.89,.75,.9);
  }
  :hover::after {
    width: 100%;
    //transition: width .3s;
  }
  :hover {
    color: #424242;
  }
`;

export const FSignInButtom = styled(Button)`
  background-color: #4267b2;
  border-color: #4267b2;
  font-weight: 500;
  height: 45px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  margin-top: 5px;
  :hover,
  :active,
  :focus {
    background-color: #fff;
    color: #4267b2;
    box-shadow: none !important;
    border: 1px solid #4267b2;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;

export const GSignInButton = styled(Button)`
  background-color: #DB4437;
  border-color: #DB4437;
  font-weight: 500;
  height: 45px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  margin-top: 20px;
  :hover,
  :active,
  :focus {
    background-color: #fff;
    color: #DB4437;
    box-shadow: none !important;
    border: 1px solid #DB4437;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;
