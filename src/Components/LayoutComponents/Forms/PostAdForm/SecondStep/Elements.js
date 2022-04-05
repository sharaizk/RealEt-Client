import styled from "styled-components";
import { motion } from "framer-motion";
import { Select, Input } from "antd";
const { Option } = Select;
export const StepContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LocationCat = styled(Select)`
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

export const LocationOption = styled(Option)`
  background-color: #fff !important;
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
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
