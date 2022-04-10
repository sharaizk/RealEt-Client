import React, { useState, useEffect } from "react";
import { Divider, Form } from "antd";
import {
  FilterProperty,
  SectionTitle2,
  CustomSelect,
  SelectOptions,
  SearchButton,
} from "./Elements";
import { useQuery } from "react-query";
import server from "../../../Axios";
const ListSideBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const { data: cities } = useQuery("Cities", async () => {
    const cityDataResponse = await server.get("/geography/cities");

    return cityDataResponse.data.data;
  });
  return (
    <FilterProperty scrollNav={scrollNav}>
      <SectionTitle2>Search Properties</SectionTitle2>
      <Divider />
      <Form name="search-form" layout="vertical">
        <Form.Item
          name="propertyIntent"
          rules={[
            {
              required: true,
              message: "Please select the status",
            },
          ]}
        >
          <CustomSelect placeholder="Status" allowClear>
            <SelectOptions value="1">Buy</SelectOptions>
            <SelectOptions value="-1">Rent</SelectOptions>
          </CustomSelect>
        </Form.Item>
        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: "Please select the city",
            },
          ]}
        >
          <CustomSelect
            placeholder="City"
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            allowClear
          >
            {cities?.map((city) => {
              return (
                <SelectOptions name="city" key={city._id} value={city.key}>
                  {city.name}
                </SelectOptions>
              );
            })}
          </CustomSelect>
        </Form.Item>
        <Form.Item
          name="Location"
          rules={[
            {
              required: true,
              message: "Please select the location",
            },
          ]}
        >
          <CustomSelect placeholder="Location" allowClear>
            <SelectOptions value="1">Lowest Price First</SelectOptions>
            <SelectOptions value="-1">Heighest Price First</SelectOptions>
          </CustomSelect>
        </Form.Item>

        <Form.Item
          name="category"
          rules={[
            {
              required: true,
              message: "Please select the category",
            },
          ]}
        >
          <CustomSelect placeholder="Category" allowClear>
            <SelectOptions value="House">House</SelectOptions>
            <SelectOptions value="Green House">Green House</SelectOptions>
            <SelectOptions value="Apartment">Apartment</SelectOptions>
            <SelectOptions value="Upper Portion">Upper Portion</SelectOptions>
            <SelectOptions value="Lower Portion">Lower Portion</SelectOptions>
            <SelectOptions value="Farm House">Farm House</SelectOptions>
            <SelectOptions value="Room">Room</SelectOptions>
            <SelectOptions value="Penthouse">Penthouse</SelectOptions>
            <SelectOptions value="Hotel Suites">Hotel Suites</SelectOptions>
            <SelectOptions value="Basement">Basement</SelectOptions>
            <SelectOptions value="Anexxe">Anexxe</SelectOptions>
            <SelectOptions value="Hostel">Hostel</SelectOptions>
            <SelectOptions value="Other">Other</SelectOptions>
          </CustomSelect>
        </Form.Item>

        <Form.Item>
          <SearchButton type="primary" htmlType="submit">
            Search Now
          </SearchButton>
        </Form.Item>
      </Form>
    </FilterProperty>
  );
};

export default ListSideBar;
