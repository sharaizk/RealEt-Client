import React, { useState } from "react";
import { Form, message } from "antd";
import { FormSubmissionBtn, TextField, CustomDragger } from "./Elements";
import { NumberRegEx } from "helpers/regex";
import { TiUploadOutline } from "react-icons/ti";
import ImgCrop from "antd-img-crop";
import { useMutation } from "react-query";
import server from "../../../../Axios";
import { getToken } from "Redux/localstorage";
const BecomeABuilder = () => {
  const [officeLogo, setOfficeLogo] = useState({});
  const [form] = Form.useForm();

  const { mutate, isLoading } = useMutation(
    async (formValues) => {
      const formData = new FormData();
      formData.append("officeName", formValues.officeName);
      formData.append("officeContact", formValues.officeContact);
      formData.append("logo", formValues.logo);
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
        message.success("An Admin will approve your request, shortly!");
      },
      onError: (error) => {
        const message = error?.message ? error?.message : "Error";
        message.error(message);
      },
    }
  );
  const onFinish = (values) => {
    mutate({
      officeName: values.officeName,
      officeContact: values.officeContact,
      logo: officeLogo,
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
      <FormSubmissionBtn loading={isLoading} type="primary" htmlType="submit">
        Request to Become a Builder
      </FormSubmissionBtn>
    </Form>
  );
};

export default BecomeABuilder;
