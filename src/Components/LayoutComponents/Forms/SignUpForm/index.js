import React, { useState } from "react";
import {
  SignUpFormContainer,
  LogoImg,
  InputField,
  CheckBox,
  PasswordField,
  UploadButton,
  SignUpBtn,
  BtnLink,
  OSignUpBtn
} from "./Elements";
import Logo from "../../../../assets/images/logo.png";
import { Form, Upload,Divider } from "antd";
import { FaUser, FaPhone, FaKey } from "react-icons/fa";
import { UploadOutlined } from "@ant-design/icons";
import { MdEmail } from "react-icons/md";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import "./style.scss";
const SignUpForm = () => {
  const [isEmail, setEmail] = useState(true);
  const toggle = (e) => {
    setEmail(!e.target.checked);
  };
  return (
    <SignUpFormContainer>
      <LogoImg src={Logo} alt="Logo" />
      <Form
        name="signup-form"
        layout="vertical"
        autoComplete="off"
        requiredMark="optional"
      >
        <Form.Item
          name="full name"
          label={<label className="formLabel">Full Name</label>}
          rules={[
            {
              required: true,
              message: "Please enter your email or phone number",
            },
            {
              min: 6,
              max: 10,
              message: "Credential must be between 6 and 10",
            },
          ]}
        >
          <InputField
            placeholder="Full Name"
            prefix={<FaUser color="#545454" />}
          />
        </Form.Item>
        {isEmail ? (
          <Form.Item
            name="email"
            label={<label className="formLabel">Email</label>}
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              {
                type: "email",
                message: "Not a valid email",
              },
            ]}
          >
            <InputField
              placeholder="Email"
              prefix={<MdEmail color="#545454" />}
            />
          </Form.Item>
        ) : (
          <Form.Item
            name="number"
            label={<label className="formLabel">Phone Number</label>}
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
              {
                type: "number",
                message: "Not a number",
              },
            ]}
          >
            <InputField
              placeholder="+923******"
              prefix={<FaPhone color="#545454" />}
            />
          </Form.Item>
        )}
        <CheckBox onChange={toggle}>
          <p className="checkbox-desc">Sign Up with Phone Number</p>
        </CheckBox>
        <Form.Item
          name="password"
          label={<label className="formLabel">Password</label>}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
              max: 10,
              message: "Password must be in the range of 6 and 10",
            },
          ]}
        >
          <PasswordField
            placeholder="Pass******"
            prefix={<FaKey color="#545454" />}
          />
        </Form.Item>
        <Form.Item
          name="upload"
          valuePropName="file"
          // getValueFromEvent={normFile}
        >
          <Upload
            maxCount={1}
            listType="text"
            beforeUpload={(file) => {
              console.log(file);
              return false;
            }}
          >
            <UploadButton type="text" icon={<UploadOutlined />}>
              Upload Profile Picture
            </UploadButton>
          </Upload>
        </Form.Item>
        <Form.Item>
          <SignUpBtn type="primary" htmlType="submit">
            Sign Up
          </SignUpBtn>
        </Form.Item>
      </Form>
      <BtnLink to="/signin">Already have an account?</BtnLink>
      <Divider />
      <OSignUpBtn color="#4267B2" icon={<FacebookFilled />}>Sign Up</OSignUpBtn>
      <OSignUpBtn color="#DB4437" icon={<GoogleOutlined />}>Sign Up</OSignUpBtn>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
