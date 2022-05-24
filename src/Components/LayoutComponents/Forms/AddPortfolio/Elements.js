import styled from "styled-components";
import { Input, Radio, Select, Button, Upload } from "antd";
const { Option } = Select;

export const AddPortfolioFormContainer = styled.div`
    height: 100%;
    width: 100%;
`


export const TextField = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  box-shadow: none;
  margin-bottom:1vh;
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
export const LocationCat = styled(Select)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  outline: none;
  margin-bottom:1vh;
  
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

export const LocationOption = styled(Option)`
  background-color: #fff !important;
`;

export const SubmitButton = styled(Button)`
  background-color: #fc6e20;
  border-color: #fc6e20;
  font-weight: 500;
  border-radius: 5px;
  margin-top: 5px;
  width: 100%;
  :hover,
  :active,
  :focus {
    background-color: #fff;
    color: #fc6e20;
    box-shadow: none !important;
    border: 1px solid #fc6e20;
  }
`;
export const CustomUpload = styled(Upload.Dragger)`
  border-radius: 10px !important;
  background-color: #fff !important;
  border: 2px dashed #d9d9d9 !important;

  &:hover {
    border-color: #fc6e20 !important ;
  }
`;