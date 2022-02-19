import styled from "styled-components";
import { Input, Button } from "antd";
export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  color: #424242;
  font-weight: 400;
  flex: 0.6;
`;

export const FormContainer = styled.div`
  flex: 0.4;
  padding: 0 20px;
`;
export const InputField = styled(Input)`
  height: 50px;
  width: 24.609898882384247vw;

  border-radius: 5px;
  :hover {
    border-color: #fc6e20 !important;
  }
  :active {
    border-color: #fc6e20 !important;
  }
  :focus {
    border-color: #fc6e20 !important;
    box-shadow: none;
  }
  @media screen and (min-width: 2560px) {
    height: 70px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;

export const ResetFields = styled(Input.Password)`
  height: 50px;
  width: 24.609898882384247vw;
  margin-bottom: 10px;

  border-radius: 5px;
  :hover {
    border-color: #fc6e20 !important;
  }
  :active {
    border-color: #fc6e20 !important;
  }
  :focus {
    border-color: #fc6e20 !important;
    box-shadow: none;
  }
  @media screen and (min-width: 2560px) {
    height: 70px;
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
  width: 24.609898882384247vw;
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
  @media screen and (min-width: 2560px) {
    height: 70px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-height: 700px) {
    height: 7vh;
  }
`;
