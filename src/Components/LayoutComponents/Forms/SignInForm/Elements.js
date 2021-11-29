import styled from "styled-components";
import { Input,Button } from "antd";
import {NavLink} from 'react-router-dom'
export const SignInFromContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    z-index: 5;
  }
`;

export const LogoImg = styled.img`
  height: 300px;
  width: 300px;

  @media screen and (max-width: 480px) {
    height: 250px;
    width: 250px;
  }

  @media screen and (max-width: 320px) {
    height: 200px;
    width: 200px;
  }
  
`;

export const FormInput = styled(Input)`
  height: 50px;
  width: 450px;
  border-radius: 5px;
  :hover,
  :active,
  :focus {
    border-color: #fc6e20 !important;
    box-shadow: none !important;
  }
  @media screen and (max-width: 1200px) {
    width: 400px;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 780px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width:100%;
  }
`;
export const PasswordInput = styled(Input.Password)`
  height: 50px;
  width: 450px;
  border-radius: 5px;
  :hover,
  :active,
  :focus {
    border-color: #fc6e20 !important;
    box-shadow: none !important;
  }
  @media screen and (max-width: 1200px) {
    width: 400px;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 780px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width:100%;
  }
`;

export const SubmitButton=styled(Button)`
  background:#FC6E20;
  border-color:#FC6E20;
  height: 50px;
  width: 450px;
  border-radius: 5px;
  margin-top:20px;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    width: 400px;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 780px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width:100%;
  }
  :hover,:active,:focus{
    background:#FFF;
    color: #FC6E20;
    border-color: #FC6E20;
  }
`
export const GSubmitButton=styled(Button)`
  background:#DB4437;
  border-color:#DB4437;
  height: 50px;
  width: 450px;
  border-radius: 5px;
  margin-top:20px;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    width: 400px;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 780px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width:100%;
  }
  :hover,:active,:focus{
    background:#FFF;
    color: #DB4437;
    border-color: #DB4437;
  }
`
export const FSubmitButton=styled(Button)`
  background:#4267B2;
  border-color:#4267B2;
  height: 50px;
  width: 450px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    width: 400px;
  }
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 780px) {
    width: 300px;
  }
  @media screen and (max-width: 320px) {
    width:100%;
  }
  :hover,:active,:focus{
    background:#FFF;
    color: #4267B2;
    border-color: #4267B2;
  }
`

export const BtnContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BtnLink =styled(NavLink)`
  color: #424242;
  font-size: 16px;
  font-weight: 400;
  :hover{
    color: #424242;
  }
`