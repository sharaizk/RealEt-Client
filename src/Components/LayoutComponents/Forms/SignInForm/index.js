import React from "react";
import {
  SignInFromContainer,
  LogoImg,
  FormInput,
  PasswordInput,
  SubmitButton,
  BtnLink,
  FSubmitButton,
  GSubmitButton,
  BtnContainer
} from "./Elements";
import Logo from "../../../../assets/images/logo.png";
import { Form, Row, Col,Divider } from "antd";
import { FaUser, FaKey } from "react-icons/fa";
import {GoogleOutlined,FacebookFilled} from '@ant-design/icons'
import "./style.scss";
const SignInForm = () => {
  return (
    <SignInFromContainer>
      <LogoImg src={Logo} alt="logo" />
      <Form
        name="basic"
        layout={"vertical"}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          name="email"
          label={<label className="formLabel">Email or Phone Number</label>}
          rules={[
            {
              required: true,
              message: "Please enter your email or phone number",
            },
          ]}
        >
          <FormInput
            placeholder={"Email or Phone Number"}
            prefix={<FaUser />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<label className="formLabel">Password</label>}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <PasswordInput placeholder={"*******"} prefix={<FaKey />} />
        </Form.Item>
        <Form.Item>
          <SubmitButton type="primary" htmlType="submit">
            Sign In
          </SubmitButton>
        </Form.Item>
        <Row justify="space-between">
          <Col span={8}><BtnLink to="/signup">Forgot Password</BtnLink></Col>
          <Col span={3.5}><BtnLink to="/signup">Sign Up</BtnLink></Col>
        </Row>
        <Divider />
        <BtnContainer>
      <FSubmitButton type="primary"  icon={<FacebookFilled />}>
            Sign In
        </FSubmitButton>
        <GSubmitButton  type="primary"  icon={<GoogleOutlined />}>
          Sign In
        </GSubmitButton>
      </BtnContainer>
      </Form>

    </SignInFromContainer>
  );
};

export default SignInForm;
