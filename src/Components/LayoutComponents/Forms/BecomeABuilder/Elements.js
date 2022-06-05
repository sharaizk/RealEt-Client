import styled from "styled-components";
import { Button, Input, Upload,Select } from "antd";

const { Dragger } = Upload;
const { Option } = Select;

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

export const LocationCat = styled(Select)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  outline: none;
  margin-bottom: 1vh;
  & .ant-select-selector {
    padding: 6px !important;
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

export const LocationOption = styled(Option)`
  background-color: #fff !important;
`;