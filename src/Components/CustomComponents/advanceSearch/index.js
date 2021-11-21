import React, { useState } from "react";
import {
  SearchFieldContainer,
  CityDropDown,
  CityOption,
  AreaDropDown,
  CategoryDropDown,
  SearchButton,
} from "./advanceSearchElements";
import "./style.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
const AdvanceSearchField = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(!loading);
    setTimeout(()=>{
        setLoading(false);
    },1000)
  };

  return (
    <SearchFieldContainer>
      <CityDropDown
        disabled={loading}
        placeholder={"Select a City"}
        bordered={false}
        suffixIcon={<MdKeyboardArrowDown/>}
      >
        <CityOption value="Islamabad">Islamabad</CityOption>
        <CityOption value="Lahore">Lahore</CityOption>
      </CityDropDown>
      <AreaDropDown
        disabled={loading}
        placeholder={"Select Area"}
        bordered={false}
        suffixIcon={<MdKeyboardArrowDown/>}
      >
        <CityOption value="Valencia">Valencia</CityOption>
        <CityOption value="Wapda Town">Wapda Town</CityOption>
      </AreaDropDown>

      <CategoryDropDown
        disabled={loading}
        placeholder={"Category"}
        bordered={false}
        suffixIcon={<MdKeyboardArrowDown/>}
      >
        <CityOption value="House">House</CityOption>
        <CityOption value="Apartment">Apartment</CityOption>
      </CategoryDropDown>
      <SearchButton
        loading={loading}
        onClick={onSubmit}
        icon={<SearchOutlined />}
      >
        Search
      </SearchButton>
    </SearchFieldContainer>
  );
};

export default AdvanceSearchField;
