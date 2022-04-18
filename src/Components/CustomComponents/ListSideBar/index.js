import React, { useState, useEffect } from "react";
import { Divider, Form, Spin } from "antd";
import {
  FilterProperty,
  SectionTitle2,
  CustomSelect,
  SelectOptions,
  SearchButton,
} from "./Elements";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import server from "../../../Axios";
const ListSideBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();
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

  const isCitySelected = selectedCity ? true : false;
  const { data: locations, isLoading: isLocationLoading } = useQuery(
    ["Location", selectedCity],
    async () => {
      const locationDataResponse = await server.get("/geography/locations", {
        params: {
          city_id: selectedCity,
        },
      });
      return locationDataResponse.data.data;
    },
    {
      enabled: isCitySelected,
    }
  );

  return (
    <FilterProperty scrollNav={scrollNav}>
      <SectionTitle2>Search Properties</SectionTitle2>
      <Divider />
      <Form
        form={form}
        name="search-form"
        layout="vertical"
        onFinish={(v) => {
          navigate(
            `/property-list/${v.city}/${v.location}/${v.category}/${v.propertyIntent}`
          );
        }}
      >
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
            <SelectOptions value="sell">Sell</SelectOptions>
            <SelectOptions value="rent">Rent</SelectOptions>
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
            onChange={(v) => {
              setSelectedCity(v);
              form.setFieldsValue({
                city: v,
              });
            }}
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
          name="location"
          rules={[
            {
              required: true,
              message: "Please select the location",
            },
          ]}
        >
          <Spin spinning={isLocationLoading}>
            <CustomSelect
              placeholder="Location"
              showSearch
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0 ||
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={(v) => {
                form.setFieldsValue({
                  location: v,
                });
              }}
            >
              {locations?.map((location) => {
                return (
                  <SelectOptions
                    name="location"
                    key={location._id}
                    value={location.key}
                  >
                    {location.name}
                  </SelectOptions>
                );
              })}
            </CustomSelect>
          </Spin>
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
