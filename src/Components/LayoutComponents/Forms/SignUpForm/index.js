import React, { useState, useRef } from "react";
import {
  SignUpFormContainer,
  LogoImg,
  InputField,
  CheckBox,
  PasswordField,
  UploadButton,
  SignUpBtn,
  BtnLink,
  OSignUpBtn,
} from "./Elements";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/images/logo.png";
import { Form, Upload, Divider, message } from "antd";
import { FaUser, FaPhone, FaKey } from "react-icons/fa";
import { UploadOutlined } from "@ant-design/icons";
import { MdEmail } from "react-icons/md";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { NumberRegEx } from "../../../../helpers/regex";
import ImgCrop from "antd-img-crop";
import "./style.scss";
import {signUp} from '../../../../Redux/actions/authActions'
import {useDispatch} from 'react-redux'
import OTPContainer from '../../../CustomComponents/OtpInput'
const SignUpForm = () => {
  const dispatch = useDispatch()
  const [isEmail, setEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [visible,setVisible] = useState(false)
  const [login, setTempLogin] = useState("")
  const BtnRef = useRef(null);
  const [form] = Form.useForm();

  const toggle = (e) => {
    setEmail(!e.target.checked);
  };


  const onFinish = async(values) => {
    setTempLogin(values.login)
    form.resetFields();
    setLoading(true);
    const res = await dispatch(signUp(values))
    setLoading(false)
    if(!res){
      setVisible(true)
    }
    BtnRef.current.blur();
  };

  const onFinishFailed = () => {
    BtnRef.current.blur();
    message.error("Please fill out the form");
  };

  return (
    <SignUpFormContainer>
      <OTPContainer visible={visible} setVisible={setVisible} login={login}/>
      <NavLink to="/">
        <LogoImg src={Logo} alt="Logo" />
      </NavLink>

      <Form
        form={form}
        name="signup-form"
        layout="vertical"
        autoComplete="off"
        requiredMark="optional"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <Form.Item
          name="fullName"
          label={<label className="formLabel">Full Name</label>}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            {
              min: 6,
              message: "Must be more than 6 characters",
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
            name="login"
            label={<label className="formLabel">Email</label>}
            hasFeedback
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
            name="login"
            label={<label className="formLabel">Phone Number</label>}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
              () => ({
                validator(_, value) {
                  if (NumberRegEx.test(value) && value.length === 13) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(
                      new Error("Not a valid phone number")
                    );
                  }
                },
              }),
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
          hasFeedback
          label={<label className="formLabel">Password</label>}
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
          <PasswordField
            settings={{
              colorScheme: {
                levels: ["#ff3333", "#fe940d", "#ffd908", "#cbe11d", "#42ba96"],
              },
              height: 3,
              alwaysVisible: false,
            }}
            placeholder="Pass******"
            prefix={<FaKey color="#545454" />}
          />
        </Form.Item>
        <Form.Item
          name="upload"
          valuePropName="file"
          rules={[
            {
              // required: true,
              message: "Please upload your profile picture",
            },
          ]}
        >
          <ImgCrop quality={0.5} grid={true} zoom={true} rotate modalOk="Upload" className="imgcropper">
            <Upload
              maxCount={1}
              listType="text"
              accept="image/*"
              beforeUpload={(file) => {
                console.log(file);
                return false;
              }}
            >
              <UploadButton type="text" icon={<UploadOutlined />}>
                Upload Profile Picture
              </UploadButton>
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Form.Item>
          <SignUpBtn
            type="primary"
            htmlType="submit"
            loading={loading}
            ref={BtnRef}
          >
            Sign Up
          </SignUpBtn>
        </Form.Item>
      </Form>
      <BtnLink to="/signin">Already have an account?</BtnLink>
      <Divider />
      <OSignUpBtn color="#4267B2" icon={<FacebookFilled />}>
        Sign Up
      </OSignUpBtn>
      <OSignUpBtn color="#DB4437" icon={<GoogleOutlined />}>
        Sign Up
      </OSignUpBtn>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
