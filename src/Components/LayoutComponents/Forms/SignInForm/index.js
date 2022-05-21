import React, { useState, useRef } from "react";
import {
  SignInFromContainer,
  LogoImg,
  InputField,
  InputFieldPassword,
  SubmitButton,
  BtnLink,
  GSignInButton,
  ForgotBTN,
  BTNContainer,
} from "./Elements";
import Logo from "../../../../assets/images/logo2.png";
import { Form, Divider, Tooltip, message, Modal } from "antd";
import { FaUser, FaKey } from "react-icons/fa";
import { GoogleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Schema from "async-validator";
import { EmailRegEx, NumberRegEx } from "../../../../helpers/regex";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signIn } from "../../../../Redux/actions/authActions";
import ForgotPassword from "../../../CustomComponents/ForgotPassword";
import { useNavigate } from "react-router-dom";
Schema.warning = function () {};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const BtnRef = useRef(null);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    BtnRef.current.blur();
    setLoading(true);

    const res = await dispatch(signIn(values));
    if (!res) {
      form.resetFields();
      navigate("/");
    }
    setLoading(false);
  };

  const onFinishFailed = () => {
    BtnRef.current.blur();
    message.error("Please fill out the form");
  };

  const onGoogleLogin = async(response) => {

    const googleLoginResponse = await dispatch(signIn({ login: response.profileObj.googleId }))
    if (!googleLoginResponse) {
      navigate("/");
    }
    
  };

  return (
    <SignInFromContainer>
      <Modal
        visible={visible}
        footer={null}
        centered
        onCancel={() => setVisible(false)}
        maskClosable={false}
      >
        <ForgotPassword setVisible={setVisible} />
      </Modal>
      <NavLink to="/">
        <LogoImg src={Logo} alt="Logo Img" />
      </NavLink>
      <Form
        form={form}
        name="signin-form"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={"optional"}
      >
        <Form.Item
          name="login"
          label={<label className="formLabel">Email or Phone Number</label>}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Credential Required",
            },
            () => ({
              validator(_, value) {
                if (EmailRegEx.test(value)) {
                  return Promise.resolve();
                } else if (NumberRegEx.test(value) && value.length === 13) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("Not an Email or a Phone Number")
                  );
                }
              },
            }),
          ]}
        >
          <InputField
            placeholder={"Email or Phone Number"}
            prefix={<FaUser color="#545454" />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={<label className="formLabel">Password</label>}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
              message: "Must be more than 6 characters",
            },
          ]}
        >
          <InputFieldPassword
            settings={{
              colorScheme: {
                levels: ["#ff3333", "#fe940d", "#ffd908", "#cbe11d", "#42ba96"],
              },
              height: 3,
              alwaysVisible: false,
            }}
            placeholder={"Pass****"}
            prefix={<FaKey color="#545454" />}
          />
        </Form.Item>
        <Form.Item>
          <SubmitButton
            type="primary"
            htmlType="submit"
            loading={loading}
            ref={BtnRef}
          >
            Sign In
          </SubmitButton>
        </Form.Item>
      </Form>
      <BTNContainer justify="start" type="flex">
        <ForgotBTN
          onClick={() => {
            setVisible(true);
          }}
        >
          Forgot Password
        </ForgotBTN>
        <BtnLink to="/signup">Sign Up</BtnLink>
      </BTNContainer>

      <Divider />
      <Tooltip title="Sign in with Google" placement="bottom">
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GAUTHKEY}`}
          render={(renderProps) => (
            <GSignInButton
              type="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              icon={<GoogleOutlined />}
            >
              Sign In
            </GSignInButton>
          )}
          onSuccess={onGoogleLogin}
        />
      </Tooltip>
    </SignInFromContainer>
  );
};

export default SignInForm;