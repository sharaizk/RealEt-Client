import styled from "styled-components";
import { Input,Checkbox,Button } from "antd";
import { NavLink } from "react-router-dom";
import {PasswordInput} from 'antd-password-input-strength'
export const SignUpFormContainer=styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: max-content;
  background-color: #fff;
  
  @media screen and (max-width: 768px) {
    z-index: 5;
  }
  @media screen and (max-height:600px) and (min-width:768px){
    padding: 0 0 10rem 0;
  }
`

export const LogoImg = styled.img`
  height: 22.852846401718583vh;
  width: 22.852846401718583vh;
`;

export const InputField = styled(Input)`
  height: 40px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  :hover {
    border-color: #fc6e20 !important;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 6vh;
  }
`

export const PasswordField = styled(PasswordInput)`
  height: 40px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  :hover {
    border-color: #fc6e20 !important;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 6vh;
  }
`

export const CheckBox = styled(Checkbox)`
    box-shadow: none;
    margin-bottom: 10px;
    @media screen and (max-width:768px) {
      margin-bottom: 0;
  }
  @media screen and (max-height:700px) {
      margin-bottom: 0;
  }
`

export const UploadButton=styled(Button)``

export const SignUpBtn = styled(Button)`
  background-color: #fc6e20;
  border-color: #fc6e20;
  font-weight: 500;
  font-size: 16px;
  height: 45px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  /* margin-top: 5px; */
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
    height: 5.5vh;
  }
`
export const BtnLink=styled(NavLink)`
  color: #424242;
  align-self: flex-start;
  :hover{
    color: #424242;
  }

`

export const OSignUpBtn=styled(Button)`
  background-color: ${({color}) => color};
  border-color: ${({color}) => color};
  font-weight: 500;
  height: 45px;
  width: 26.609898882384247vw;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  color: #F3F3F3;
  :hover,
  :active,
  :focus {
    background-color: #F3F3F3;
    color: ${({color}) => color};
    box-shadow: none !important;
    border: 1px solid ${({color}) => color};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 5.5vh;
  }
`