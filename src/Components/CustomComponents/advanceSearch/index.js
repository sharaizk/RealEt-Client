import React, { useState } from "react";
import {
  SearchFieldContainer,
  CityDropDown,
  COption,
  AreaDropDown,
  CategoryDropDown,
  SearchButton,
  OptionsContainer,
  ButtonContainer,
  BuyRentBtn,
} from "./advanceSearchElements";
import "./style.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
import {message} from 'antd'
const AdvanceSearchField = () => {
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState({
    buyActive: true,
    rentActive: false,
    city: "",
    location: "",
    category: "",
  });
  const onSubmit = () => {
    setLoading(!loading);
    if(!searchParam.city || !searchParam.location || !searchParam.category){
      message.error("Please fill the form")
    }
    else{
      console.log(searchParam)
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };


  const toggleBtn = (type) => {
    if (type === "buy") {
      setSearchParam({
        ...searchParam,
        buyActive: true,
        rentActive: false,
      });
    } else {
      setSearchParam({
        ...searchParam,
        buyActive: false,
        rentActive: true,
      });
    }
  };

  return (
    <SearchFieldContainer>
      <ButtonContainer>
        <BuyRentBtn
          onClick={() => toggleBtn("buy")}
          disabled={loading}
          isActive={searchParam.buyActive}
          type="text"
        >
          Buy
        </BuyRentBtn>
        <BuyRentBtn
          onClick={() => toggleBtn("rent")}
          disabled={loading}
          isActive={searchParam.rentActive}
          type="text"
        >
          Rent
        </BuyRentBtn>
      </ButtonContainer>
      <OptionsContainer>
        <CityDropDown
          disabled={loading}
          placeholder={"Select a City"}
          bordered={false}
          suffixIcon={<MdKeyboardArrowDown />}
          showSearch={true}
          onChange={(values)=>{setSearchParam({...searchParam,city:values})}}
        >
          <COption value="Islamabad">Islamabad</COption>
          <COption value="Lahore">Lahore</COption>
        </CityDropDown>
        <AreaDropDown
          disabled={loading}
          placeholder={"Select Area"}
          bordered={false}
          suffixIcon={<MdKeyboardArrowDown />}
          showSearch={true}
          onChange={(values)=>{setSearchParam({...searchParam,location:values})}}
        >
          <COption value="Valencia">Valencia</COption>
          <COption value="Wapda Town">Wapda Town</COption>
        </AreaDropDown>

        <CategoryDropDown
          disabled={loading}
          placeholder={"Category"}
          bordered={false}
          suffixIcon={<MdKeyboardArrowDown />}
          showSearch={true}
          onChange={(values)=>{setSearchParam({...searchParam,category:values})}}
        >
          <COption value="House">House</COption>
          <COption value="Apartment">Apartment</COption>
        </CategoryDropDown>
        <SearchButton
          loading={loading}
          onClick={onSubmit}
          icon={<SearchOutlined />}
        >
          Search
        </SearchButton>
      </OptionsContainer>
    </SearchFieldContainer>
  );
};

export default AdvanceSearchField;
