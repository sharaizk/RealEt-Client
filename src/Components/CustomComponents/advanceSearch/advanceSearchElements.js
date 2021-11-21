import styled from "styled-components";
import { Select } from "antd";
import { Button } from "antd";
const { Option } = Select;
export const SearchFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 10px;
  @media screen and (max-width:550px){
      flex-direction: column;
      height: auto;
  }
`;

export const CityDropDown = styled(Select)`
  flex: 0.3;
  @media screen and (max-width:550px){
      width: 100%;
      margin-bottom: 5px;
  }
`;
export const CityOption = styled(Option)``;

export const AreaDropDown = styled(Select)`
  flex: 0.3;
  @media screen and (max-width:550px){
      width: 100%;
      margin-bottom: 5px;
  }
`;

export const CategoryDropDown = styled(Select)`
  flex: 0.3;
  @media screen and (max-width:550px){
      width: 100%;
      margin-bottom: 5px;
  }
`;

export const SearchButton = styled(Button)`
  flex: 0.1;
  background-color: #fc6e20;
  color: #FFF;
  border-radius: 2.5px;
  box-shadow: none;
  border: none;
  :hover{
    color: #FFF;
      background-color: #fc6e20;
  }
  :focus,:active{
      color: #FFF;
      background-color: #fc6e20;
  }
  @media screen and (max-width:550px){
      width: 100%;
  }
`;
