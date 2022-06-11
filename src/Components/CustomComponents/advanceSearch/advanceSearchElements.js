import styled from "styled-components";
import { Select } from "antd";
import { Button } from "antd";
const { Option } = Select;
export const SearchFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 15px 15px 15px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: auto;
  }
`;
export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: auto;
  }
`;

export const CityDropDown = styled(Select)`
  flex: ${({ $flex }) => $flex};
  @media screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;
export const COption = styled(Option)``;

export const AreaDropDown = styled(Select)`
  flex: 0.4;
  @media screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const CategoryDropDown = styled(Select)`
  flex: 0.25;
  @media screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuyRentBtn = styled.button`
  font-size: 18px;
  color: ${({ isActive }) => (isActive ? "#fc6e20" : "#424242")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 12px;
  background-color: transparent;
  transition: all 0.2s ease-in;
  &:disabled {
    opacity: 0.5;
  }
`;

export const SearchButton = styled(Button)`
  flex: 0.125;
  background-color: #fc6e20;
  color: #fff;
  border-radius: 5px;
  box-shadow: none;
  border: none;
  :hover {
    color: #fff;
    background-color: #fc6e20;
  }
  :focus,
  :active {
    color: #fff;
    background-color: #fc6e20;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
