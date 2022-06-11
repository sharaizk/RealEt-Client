import React, { useState } from "react";
import { Form, message, Row, Col, Spin } from "antd";
import {
  FormSubmissionBtn,
  TextField,
  CustomDragger,
  LocationCat,
  LocationOption,
} from "./Elements";
import { NumberRegEx } from "helpers/regex";
import { TiUploadOutline } from "react-icons/ti";
import ImgCrop from "antd-img-crop";
import { useMutation } from "react-query";
import server from "../../../../Axios";
import { getToken } from "Redux/localstorage";
import { useQuery } from "react-query";
const BecomeABuilder = () => {
  const [officeLogo, setOfficeLogo] = useState({});
  const [cnic, setCnic] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [form] = Form.useForm();

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

  const { mutate, status } = useMutation(
    async (formValues) => {
      const formData = new FormData();
      formData.append("officeName", formValues.officeName);
      formData.append("officeContact", formValues.officeContact);
      formData.append("logo", formValues.logo);
      formData.append("city", formValues.city);
      formData.append("location", formValues.location);
      formData.append("cnic", formValues.cnic);
      for (let i = 0; i < cnic.length; i++) {
        let image = cnic[i];
        formData.append("cnic", image);
      }
      const token = getToken();
      const builderResponse = await server.post("/builder/apply", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return builderResponse;
    },
    {
      onSuccess: () => {
        form.resetFields();
        setOfficeLogo({});
        setCnic([]);
        message.success("An Admin will approve your request, shortly!");
      },
      onError: (error) => {
        const message = error?.message ? error?.message : "Error";
        message.error(message);
      },
    }
  );
  const onFinish = (values) => {
    // console.log(cnic);
    mutate({
      officeName: values.officeName,
      officeContact: values.officeContact,
      logo: officeLogo,
      cnic: cnic,
      city: values.city,
      location: values.location,
    });
  };
  return (
    <Form
      name="become-a-builder"
      layout="vertical"
      form={form}
      requiredMark="optional"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="officeName"
        label="Office Name"
        rules={[{ required: true, message: "Buy or Rent is Required" }]}
      >
        <TextField placeholder="Enter your office Name" />
      </Form.Item>
      <Form.Item
        name="officeContact"
        label="Office Contact"
        rules={[
          { required: true, message: "Buy or Rent is Required" },
          () => ({
            validator(_, value) {
              if (NumberRegEx.test(value)) {
                return Promise.resolve();
              } else {
                return Promise.reject(new Error("Not a Phone Number"));
              }
            },
          }),
        ]}
      >
        <TextField placeholder="Enter your office phone number" />
      </Form.Item>
      <Row gutter={{ xs: 0, md: 16 }}>
        <Col xs={24} sm={12}>
          <Form.Item
            name="city"
            label="City"
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
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
        </Col>
        <Col xs={24} sm={12}>
          <Spin spinning={isLocationLoading}>
            <Form.Item
              name="location"
              label="Location"
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                }
                allowClear
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
          </Spin>
        </Col>
      </Row>
      <Form.Item
        name="cnic"
        label="CNIC (both sides)"
        required="true"
        rules={[
          () => ({
            validator(_, value) {
              if (cnic.length === 0) {
                return Promise.reject(
                  new Error("Please upload both sides of CNIC")
                );
              }
              if (cnic.length > 2) {
                return Promise.reject(
                  new Error("Please upload 2 images of CNIC only")
                );
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <ImgCrop
          quality={0.5}
          grid={true}
          aspect={2.75 / 1.75}
          zoom={true}
          rotate
          modalOk="Upload"
          className="imgcropper"
        >
          <CustomDragger
            multiple={true}
            beforeUpload={(file) => {
              setCnic([...cnic, file]);
              return false;
            }}
            onRemove={(i) => {
              const removedArray = cnic.filter((file) => file.name !== i.name);
              setCnic(removedArray);
            }}
          >
            <TiUploadOutline size={50} color="#fc6e20" />
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">Please upload your CNIC here</p>
          </CustomDragger>
        </ImgCrop>
      </Form.Item>
      <Form.Item
        name="logo"
        label="Office Logo"
        required="true"
        rules={[
          () => ({
            validator(_, value) {
              if (Object.keys(officeLogo).length === 0) {
                return Promise.reject(new Error("Please upload Profile Photo"));
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <ImgCrop
          quality={0.5}
          grid={true}
          zoom={true}
          rotate
          modalOk="Upload"
          className="imgcropper"
        >
          <CustomDragger
            beforeUpload={(file) => {
              setOfficeLogo(file);
              return false;
            }}
            onRemove={() => setOfficeLogo({})}
          >
            <TiUploadOutline size={50} color="#fc6e20" />
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">Please upload your logo here</p>
          </CustomDragger>
        </ImgCrop>
      </Form.Item>

      <FormSubmissionBtn
        loading={status?.loading}
        type="primary"
        htmlType="submit"
      >
        Request to Become a Builder
      </FormSubmissionBtn>
    </Form>
  );
};

export default BecomeABuilder;
