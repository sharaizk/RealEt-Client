import React from "react";
import {
  SignInFromContainer,
  LogoImg,
  InputField,
  InputFieldPassword,
  SubmitButton,
  BtnLink,
  FSignInButtom,
  GSignInButton,
} from "./Elements";
import Logo from "../../../../assets/images/logo.png";
import { Form, Row, Col, Divider, Tooltip, message } from "antd";
import { FaUser, FaKey } from "react-icons/fa";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./style.scss";


const SignInForm = () => {
  // const RegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
     message.success("Hello")
    form.resetFields();
  };
  return (
    <SignInFromContainer>
      <NavLink to="/">
        <LogoImg src={Logo} alt="Logo Img" />
      </NavLink>
      <Form
        form={form}
        name="signin-form"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={"optional"}
      >
        <Form.Item
          name="email"
          label={<label className="formLabel">Email or Phone Number</label>}
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
            placeholder={"Email or Phone Number"}
            prefix={<FaUser color="#545454" />}
          />
        </Form.Item>
        <Form.Item
          name="Password"
          label={<label className="formLabel">Password</label>}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
              max: 10,
              message: "Password must be between 6 and 10",
            },
          ]}
        >
          <InputFieldPassword
            placeholder={"Pass****"}
            prefix={<FaKey color="#545454" />}
          />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            Sign In
          </SubmitButton>
        </Form.Item>
        <Row justify="space-between">
          <Col span={15}>
            <BtnLink to="/signup">Forgot Password</BtnLink>
          </Col>
          <Col span={3.5}>
            <BtnLink to="/signup">Sign Up</BtnLink>
          </Col>
        </Row>
      </Form>

      <Divider />
      <Tooltip title="Sign in with Facebook">
        <FSignInButtom type="primary" icon={<FacebookFilled />}>
          Sign In
        </FSignInButtom>
      </Tooltip>
      <Tooltip title="Sign in with Google" placement="bottom">
        <GSignInButton type="primary" icon={<GoogleOutlined />}>
          Sign In
        </GSignInButton>
      </Tooltip>
    </SignInFromContainer>
  );
};

export default SignInForm;
