import React, { useState } from "react";
import { ModalContainer, Title, InputContainer, Info } from "./Elements";
import AuthCode from "react-auth-code-input";
import server from "../../../Axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const OTPContainer = ({ setVisible, login, password }) => {
  const navigate = useNavigate();
  const [otp, setResult] = useState("");

  const verifyOTP = async () => {
    try {
      const res = await server.patch(`/auth/verify-otp`, { login, otp });
      if (!password) {
        notification["success"]({
          message: `${res?.data?.message}`,
        });
        setVisible(false);
        setResult("");
        setTimeout(() => {
          navigate("/signin");
        }, 500);
      } else {
        const res2 = await server.patch("/auth/reset-password", {
          password,
          login,
        });
        notification["success"]({
          description: `${res2?.data?.message}`,
        });
        setVisible(false);
        setResult("");
      }
    } catch (error) {
      console.log(error);
      notification["error"]({
        message: `${error.response.data.message}`,
        description: "Cannot verify your otp at the moment",
      });
    }
  };

  // const verifyOTPReset = async () => {
  //   try {
  //     await server.patch(`/auth/verify-otp`, { login, otp });
  //     const res2 = await server.patch(`/auth/reset-password`, {
  //       login,
  //       password: password.newpassword,
  //     });
  //     setResult("");
  //     setVisible(false);
  //     notification["success"]({
  //       message: `${res2?.data?.message}`,
  //     });
  //   } catch (error) {
  //     notification["error"]({
  //       message: `${error.response.data.message}`,
  //       description: "Cannot change your password at the moment",
  //     });
  //   }
  // };

  const handleOnChange = (res) => {
    setResult(res);
  };
  if (otp.length === 4) {
    verifyOTP();
  }
  return (
    <>
      <ModalContainer>
        <Title>Account Verification</Title>
        <InputContainer disabled={false}>
          <Info>
            Please use the otp that was shared on
            <br />
            {login}
          </Info>
          <AuthCode
            length={4}
            onChange={handleOnChange}
            containerClassName="container"
            inputClassName="input"
            inputType="number"
          />
        </InputContainer>
      </ModalContainer>
    </>
  );
};

export default OTPContainer;
