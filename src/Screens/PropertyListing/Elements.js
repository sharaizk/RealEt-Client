import styled from "styled-components";
import { Button, Select } from "antd";
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
  padding: 80px 20vw 0 20vw;
  @media screen and (max-height: 700px) {
    height: 100%;
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

export const ListingSection = styled.div`
  flex: 0.65;
  height: 100%;
`;
export const FilterProperty = styled.div`
  flex: 0.3;
  height: 100%;
`;

export const SectionTitle = styled.h5`
  font-size: 1.6rem;
  color: #545454;
  font-weight: 300;
`;
export const SectionTitle2 = styled.h5`
  font-size: 1.2rem;
  line-height: 2.6rem;
  color: #545454;
  font-weight: 300;
`;

export const SearchButton = styled(Button)`
  width: 100%;
  padding: 10px 0 30px 0;
  border-radius: 5px;
  background-color: #fc6e20;
  border-color: #fc6e20;

  &:hover,
  :focus,
  :active {
    background-color: #fc6e20;
    border-color: #fc6e20;
  }
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
