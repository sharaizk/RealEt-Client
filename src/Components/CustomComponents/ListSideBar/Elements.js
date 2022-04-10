import styled from "styled-components";
import { Button, Select } from "antd";
const { Option } = Select;

export const FilterProperty = styled.div`
  flex: 0.2;
  height: 100%;
  position: sticky;
  top: 0;
  padding-top: ${({ scrollNav }) => (!scrollNav ? 0 : "80px")};
  transition: all 0.2s;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SectionTitle2 = styled.h5`
  font-size: 1.2rem;
  line-height: 2.8rem;
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
