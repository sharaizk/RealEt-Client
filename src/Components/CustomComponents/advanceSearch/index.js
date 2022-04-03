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
import { message } from "antd";
import { useQuery } from "react-query";
import server from "../../../Axios";

const AdvanceSearchField = () => {
  const [loading, setLoading] = useState(false);
  const [searchParam, setSearchParam] = useState({
    buyActive: true,
    rentActive: false,
    city: null,
    location: null,
    category: "",
  });
  const onSubmit = () => {
    setLoading(!loading);
    if (!searchParam.city || !searchParam.location || !searchParam.category) {
      message.error("Please fill the form");
    } else {
      console.log(searchParam);
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

  const { data: cities } = useQuery("Cities", async () => {
    const cityDataResponse = await server.get("/geography/cities");

    return cityDataResponse.data.data;
  });

  const isCitySelected = searchParam.city ? true : false;
  const { data: locations } = useQuery(
    ["Location", searchParam.city],
    async () => {
      const locationDataResponse = await server.get("/geography/locations", {
        params: {
          city_id: searchParam.city,
        },
      });
      return locationDataResponse.data.data;
    },
    {
      enabled: isCitySelected,
    }
  );

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
          onChange={(values) => {
            setSearchParam({ ...searchParam, city: values });
            if (!values) {
              setSearchParam({ ...searchParam, location: null });
            }
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          allowClear
        >
          {cities?.map((city) => {
            return (
              <COption name="city" key={city._id} value={city.key}>
                {city.name}
              </COption>
            );
          })}
        </CityDropDown>
        <AreaDropDown
          disabled={loading}
          placeholder={"Select Area"}
          bordered={false}
          suffixIcon={<MdKeyboardArrowDown />}
          showSearch={true}
          onChange={(values) => {
            setSearchParam({ ...searchParam, location: values });
          }}
          defaultValue={searchParam.city && searchParam.location}
        >
          {locations?.map((location) => {
            return (
              <COption name="location" key={location._id} value={location.key}>
                {location.name}
              </COption>
            );
          })}
        </AreaDropDown>

        <CategoryDropDown
          disabled={loading}
          placeholder={"Category"}
          bordered={false}
          suffixIcon={<MdKeyboardArrowDown />}
          showSearch={true}
          onChange={(values) => {
            setSearchParam({ ...searchParam, category: values });
          }}
        >
          <COption value="House">House</COption>
          <COption value="Green House">Green House</COption>
          <COption value="Apartment">Apartment</COption>
          <COption value="Upper Portion">Upper Portion</COption>
          <COption value="Lower Portion">Lower Portion</COption>
          <COption value="Farm House">Farm House</COption>
          <COption value="Room">Room</COption>
          <COption value="Penthouse">Penthouse</COption>
          <COption value="Hotel Suites">Hotel Suites</COption>
          <COption value="Basement">Basement</COption>
          <COption value="Anexxe">Anexxe</COption>
          <COption value="Hostel">Hostel</COption>
          <COption value="Other">Other</COption>
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
