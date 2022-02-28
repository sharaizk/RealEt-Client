import React, { useState, useRef } from "react";
import {
  ModalContainer,
  Title,
  FormContainer,
  InputField,
  SubmitButton,
  ResetFields,
} from "./Elements";
import { Form, notification } from "antd";
import { EmailRegEx, NumberRegEx } from "../../../helpers/regex";
import OtpInput from "../OtpInput";
import server from "../../../Axios";
import "./styles.scss";
const ForgotPassword = ({ setVisible }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [cred, setCred] = useState("");
  const [isOTP, setIsOTP] = useState(false);
  const BtnRef = useRef(null);
  const onFinish = async (values) => {
    setLoading(true);
    const { login, password } = values;
    try {
      const res = await server.patch("/auth/forgot-password", { login });
      if (res.status === 200) {
        setIsOTP(true);
        setLoading(false);
        setCred(login);
        setPassword(password);
        notification["success"]({
          description: `${res?.data?.message}`,
        });
      }
    } catch (error) {
      notification["error"]({
        message: `${error.response?.data?.message}`,
      });
      setLoading(false);
    }
  };
  const onFinishFailed = () => {};

  return (
    <ModalContainer>
      <Title>Reset Password</Title>
      {!isOTP ? (
        <FormContainer>
          <Form
            form={form}
            name="forgotpassword-form"
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
                //   prefix={<FaUser color="#545454" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={<label className="formLabel">New Password</label>}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Credential Required",
                },
              ]}
            >
              <ResetFields placeholder={"New Password"} />
            </Form.Item>
            <Form.Item
              name="confirmpassword"
              label={<label className="formLabel">Confirm New Password</label>}
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <ResetFields placeholder={"New Password"} />
            </Form.Item>
            <Form.Item>
              <SubmitButton
                type="primary"
                htmlType="submit"
                loading={loading}
                ref={BtnRef}
              >
                Find My Account
              </SubmitButton>
            </Form.Item>
          </Form>
        </FormContainer>
      ) : (
        <OtpInput
          setVisible={setVisible}
          login={cred}
          type="resetpassword"
          password={password}
        />
      )}
    </ModalContainer>
  );
};

export default ForgotPassword;
