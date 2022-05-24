import React, { useState } from "react";
import {
  AddPortfolioFormContainer,
  TextField,
  RadioButtonsContainer,
  RadioBtn,
  SubTypeCat,
  SubTypeOption,
  LocationCat,
  LocationOption,
  SubmitButton,
  CustomUpload,
} from "./Elements";
import "./styles.scss";
import { Form, Spin, message } from "antd";
import TextEditor from "Components/CustomComponents/TextEditor";

import { useQuery, useMutation } from "react-query";
import { getToken } from "Redux/localstorage";
import server from "../../../../Axios";

const AddPortfolio = ({setModal}) => {
  const [form] = Form.useForm();
  const [selectedCity, setSelectedCity] = useState("");
  const { data: cities, isLoading: isCityLoading } = useQuery(
    "Cities",
    async () => {
      const cityDataResponse = await server.get("/geography/cities");

      return cityDataResponse.data.data;
    }
  );
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

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };


  const { mutate, isLoading } = useMutation(async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("city", values.city);
    formData.append("description", values.description);
    formData.append("location",values.location)
    formData.append("propertySubType", values.propertySubType);
    formData.append("size", values.size);
    formData.append("type", values.type);
    formData.append("yearBuilt", values.yearBuilt);
    for (let i = 0; i < values.photos.length; i++) {
      let image = values.photos[i].originFileObj;
      formData.append("photos", image);
    }
    const savePortfolioResponse = await server.post(
      "/portfolio/add",
      formData,
      {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      }
    );
    return savePortfolioResponse.data
  }, {
      onSuccess: (newValues) => {
          form.resetFields()
          message.success("Portfolio added successfully")
          setModal(false)
      }
  });

  return (
    <AddPortfolioFormContainer>
      <Form
        form={form}
        layout="vertical"
        requiredMark="optional"
        name="Add Portfolio"
        onFinish={(values)=>mutate(values)}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Portfolio Title is Required",
            },
          ]}
          label="Title"
        >
          <TextField placeholder="Portfolio Title" />
        </Form.Item>
        <Form.Item
          label="Type of Property"
          name="type"
          rules={[
            {
              required: true,
              message: "Property type is required",
            },
          ]}
        >
          <RadioButtonsContainer>
            <RadioBtn value={"Residential"}>Residential</RadioBtn>
            <RadioBtn value={"Plot"}>Plot</RadioBtn>
            <RadioBtn value={"Commercial"}>Commercial</RadioBtn>
          </RadioButtonsContainer>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Property Information is Required",
            },
            () => ({
              validator(_, value) {
                if (form?.getFieldsValue()?.description?.length < 12) {
                  return Promise.reject(
                    new Error("Property Description is required")
                  );
                }
                return Promise.resolve();
              },
            }),
          ]}
          label="Description"
        >
          <TextEditor
            value={form?.getFieldsValue().description}
            setValue={form?.setFieldsValue}
          />
        </Form.Item>

        <Form.Item
          label="Sub Type"
          name="propertySubType"
          rules={[
            {
              required: true,
              message: "Property Sub type is required",
            },
          ]}
        >
          <SubTypeCat placeholder="Select Subtype">
            <SubTypeOption value="House">House</SubTypeOption>
            <SubTypeOption value="Green House">Green House</SubTypeOption>
            <SubTypeOption value="Apartment">Apartment</SubTypeOption>
            <SubTypeOption value="Upper Portion">Upper Portion</SubTypeOption>
            <SubTypeOption value="Lower Portion">Lower Portion</SubTypeOption>
            <SubTypeOption value="Farm House">Farm House</SubTypeOption>
            <SubTypeOption value="Room">Room</SubTypeOption>
            <SubTypeOption value="Penthouse">Penthouse</SubTypeOption>
            <SubTypeOption value="Hotel Suites">Hotel Suites</SubTypeOption>
            <SubTypeOption value="Basement">Basement</SubTypeOption>
            <SubTypeOption value="Anexxe">Anexxe</SubTypeOption>
            <SubTypeOption value="Hostel">Hostel</SubTypeOption>
            <SubTypeOption value="Other">Other</SubTypeOption>
          </SubTypeCat>
        </Form.Item>
        <Form.Item
          name="city"
          label="Where's your place located?"
          rules={[
            {
              required: true,
              message: "Please select your city",
            },
          ]}
        >
          <Spin spinning={isCityLoading}>
            <LocationCat
              showSearch
              placeholder="Select your City"
              onChange={(v) => {
                setSelectedCity(v);
                form.setFieldsValue({
                  city: v,
                });
              }}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0 ||
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              allowClear
            >
              {cities?.map((city) => {
                return (
                  <LocationOption name="city" key={city._id} value={city.key}>
                    {city.name}
                  </LocationOption>
                );
              })}
            </LocationCat>
          </Spin>
        </Form.Item>
        <Spin spinning={isLocationLoading}>
          <Form.Item
            name="location"
            rules={[
              {
                required: true,
                message: "Please select your location",
              },
            ]}
          >
            <LocationCat
              showSearch
              placeholder="Select Location"
              disabled={!isCitySelected}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0 ||
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              allowClear
              onChange={(v) => {
                form.setFieldsValue({
                  location: v,
                });
              }}
            >
              {locations?.map((location) => {
                return (
                  <LocationOption
                    name="location"
                    key={location._id}
                    value={location.key}
                  >
                    {location.name}
                  </LocationOption>
                );
              })}
            </LocationCat>
          </Form.Item>
          <Form.Item
            name="size"
            label="Size"
            rules={[
              {
                required: true,
                message: "Please type size of property",
              },
            ]}
          >
            <TextField placeholder="10 Marla" />
          </Form.Item>
          <Form.Item
            name="yearBuilt"
            label="Year"
            rules={[
              {
                required: true,
                message: "Please enter year built",
              },
            ]}
          >
            <TextField placeholder="2001" />
          </Form.Item>
          <Form.Item
            name="photos"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              () => ({
                validator(_, value) {
                  if (!value || value?.length === 0) {
                    return Promise.reject(
                      new Error("Please upload your property photos")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <CustomUpload
              accept="image/*"
              multiple={true}
              name="files"
              getValueFromEvent={normFile}
              beforeUpload={(file) => {
                return false;
              }}
              listType="picture-card"
            >
              <p className="ant-upload-drag-icon">{/* <InboxOutlined /> */}</p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </CustomUpload>
          </Form.Item>
          <SubmitButton loading={isLoading} type="primary" htmlType="submit">
            Add Portfolio
          </SubmitButton>
        </Spin>
      </Form>
    </AddPortfolioFormContainer>
  );
};

export default AddPortfolio;
