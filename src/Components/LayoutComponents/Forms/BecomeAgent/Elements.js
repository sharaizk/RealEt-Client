import styled from "styled-components";
import { Button, Input, Upload } from "antd";

const { Dragger } = Upload;
export const FormSubmissionBtn = styled(Button)`
  align-self: center;
  justify-self: center;
  background-color: #fc6e20;
  border: none;
  border-radius: 5px;
  &:hover,
  :focus,
  :active {
    color: #fc6e20;
    background-color: #fff;
  }
`;

export const FormTitle = styled.h4`
  font-size: 1.3rem;
  color: #424242;
  font-weight: 400;
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

export const CustomDragger = styled(Dragger)`
  border-radius: 10px !important;
  &:hover {
    border-color: #fc6e20 !important;
  }
`;
