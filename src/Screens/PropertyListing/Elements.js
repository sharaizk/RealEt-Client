import styled from "styled-components";
import { Select } from "antd";
import { motion } from "framer-motion";
const { Option } = Select;
export const PropertyListContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-direction: column;
  background-color: #fff;
  padding: 80px 17vw 0 17vw;

  @media screen and (max-height: 700px) {
    height: 100%;
  }
  @media screen and (max-width: 1280px) {
    padding: 80px 5vw 0 5vw;
  }
  @media screen and (max-width: 1024px) {
    padding: 80px 5vw 0 5vw;
  }
  @media screen and (max-width: 768px) {
    flex: 1;
    padding: 80px 6vw 0 6vw;
  }
`;

export const CrumbContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

export const PropertySection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SectionTitle = styled.h5`
  font-size: 1.6rem;
  color: #545454;
  font-weight: 300;
`;

export const CustomSelect = styled(Select)`
  width: 100%;

  & .ant-select-selector {
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

export const SelectOptions = styled(Option)``;

export const ListContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 3vh;
`;

export const ListingSection = styled.div`
  flex: 0.75;
  height: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
