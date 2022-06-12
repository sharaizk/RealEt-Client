import React from "react";
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
import { useQuery } from "react-query";
import server from "../../../Axios";

const AdvanceSearchField = ({
  search,
  onSearchBuilders,
  searchParam,
  setSearchParam,
  onSearchProperties,
}) => {
  const toggleBtn = (type) => {
    setSearchParam({
      ...searchParam,
      propertyIntent: type,
    });
  };

  const { data: cities } = useQuery("Cities", async () => {
    const cityDataResponse = await server.get("/geography/cities");

    return cityDataResponse.data.data;
  });

  const isCitySelected = searchParam?.city ? true : false;
  const { data: locations } = useQuery(
    ["Location", searchParam?.city],
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
      {search === "properties" && (
        <ButtonContainer>
          <BuyRentBtn
            onClick={() => toggleBtn("sell")}
            isActive={searchParam.propertyIntent === "sell"}
            type="text"
          >
            Sell
          </BuyRentBtn>
          <BuyRentBtn
            onClick={() => toggleBtn("rent")}
            isActive={searchParam.propertyIntent === "rent"}
            type="text"
          >
            Rent
          </BuyRentBtn>
        </ButtonContainer>
      )}
      <OptionsContainer>
        <CityDropDown
          $flex={search === "properties" ? 0.2 : 0.5}
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
          placeholder={"Select Area"}
          bordered={false}
          suffixIcon={<MdKeyboardArrowDown />}
          showSearch={true}
          onChange={(values) => {
            setSearchParam({ ...searchParam, location: values });
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue={searchParam?.city && searchParam?.location}
        >
          {locations?.map((location) => {
            return (
              <COption name="location" key={location._id} value={location.key}>
                {location.name}
              </COption>
            );
          })}
        </AreaDropDown>

        {search === "properties" && (
          <CategoryDropDown
            placeholder={"Category"}
            bordered={false}
            suffixIcon={<MdKeyboardArrowDown />}
            showSearch={true}
            onChange={(values) => {
              setSearchParam({ ...searchParam, category: values });
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
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
        )}
        <SearchButton
          onClick={() => {
            if (search === "properties") {
              onSearchProperties();
            } else {
              onSearchBuilders();
            }
          }}
          icon={<SearchOutlined />}
        >
          Search
        </SearchButton>
      </OptionsContainer>
    </SearchFieldContainer>
  );
};

export default AdvanceSearchField;
