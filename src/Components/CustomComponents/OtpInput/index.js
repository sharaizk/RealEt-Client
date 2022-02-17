import React, { useState } from "react";
import { Modal } from "antd";
import { ModalContainer, Title, InputContainer, Info, SVG } from "./Elements";
import AuthCode from "react-auth-code-input";
import server from "../../../Axios";
import { notification } from "antd";
import { useNavigate } from 'react-router-dom';
import "./styles.scss";

const OTPContainer = ({ visible, setVisible, login }) => {
    const navigate=useNavigate()
  const [otp, setResult] = useState("");

  const verifyOTP = async () => {
    try {
      const res = await server.patch("/auth/verify-otp", { login, otp });
      if (res.status === 200) {
        setResult("");
        setVisible(false);
        notification["success"]({
          message: `${res?.data?.message}`,
          description: "OTP Verified redirecting you in a moment",
        });
        setTimeout(()=>{
            navigate("/signin")
        },2000)
      }
    } catch (error) {
      notification["error"]({
        message: `${error.response.data.message}`,
        description: "Cannot verify your otp at the moment",
      });
    }
  };
  const handleOnChange = (res) => {
    setResult(res);
  };
  if (otp.length === 4) {
    verifyOTP();
  }
  return (
    <Modal
      centered
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      maskClosable={false}
      closable={false}
    >
      <SVG />

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
    </Modal>
  );
};

export default OTPContainer;
