import styled from "styled-components";
import { motion } from "framer-motion";
import { Select, Input, Upload } from "antd";
const { Option } = Select;
export const StepContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const UnitCat = styled(Select)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  outline: none;
`;
export const GroupTextField = styled(Input)`
  flex: 1;
  & .ant-input-wrapper {
    & input {
      border-radius: 10px;
      padding: 10px;
      box-shadow: none;
      width: 100%;
      &:focus,
      :active {
        box-shadow: none;
        border: 1px solid #d9d9d9;
      }
      &:hover {
        border: 1px solid #d9d9d9;
      }
    }
    & span {
      background-color: #fff;
      border-radius: 0 10px 10px 0;
    }
    & .ant-select-selection-item {
      color: #424242;
    }
  }
`;
export const TextField = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  width: 100%;
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

export const UnitOption = styled(Option)`
  background-color: #fff !important;
`;

export const CustomUpload = styled(Upload.Dragger)`
  border-radius: 10px !important;
  background-color: #fff !important;
  border: 2px dashed #d9d9d9 !important;
  &:hover {
    border-color: #fc6e20 !important ;
  }
`;
