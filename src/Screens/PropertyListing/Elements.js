import styled from "styled-components";
import { Button, Select } from "antd";
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

export const ListingSection = styled.div`
  flex: 0.75;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

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

export const SectionTitle = styled.h5`
  font-size: 1.6rem;
  color: #545454;
  font-weight: 300;
`;
export const SectionTitle2 = styled.h5`
  font-size: 1.2rem;
  line-height: 2.8rem;
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

export const ListContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 3vh;
`;

export const List = styled.div`
  width: 100%;
  height: 22.5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1280px) {
    height: 18vh;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex: 0.3;
  height: 100%;

  /* @media screen and (max-width: 1280px) {
    flex: 0.4;
  } */
`;
export const ListImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
`;

export const DescContainer = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 15px;
  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const ListTitle = styled.h4`
  font-size: 1.7rem;
  line-height: 1.7rem;
  color: #545454;
  font-weight: 300;
`;

export const ListLocation = styled.h6`
  color: #5a5a5a;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
`;

export const ListDesc = styled.p`
  font-size: 0.8rem;
  text-align: left;
  color: #5a5a5a;
  margin: 0;
  margin-top: auto;
`;

export const PriceTag = styled.div`
  background-color: #fc6e20;
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  margin-top: auto;
  font-size: 0.8rem;
`;

export const InfoContainer = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 15px;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }
  & > .ant-row {
    width: 100%;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const InfoTitle = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
`;
export const InfoDetail = styled.label`
  font-size: 0.8rem;
`;
