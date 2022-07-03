import React, { useEffect } from "react";
import { SignInContainer, ImageContainer, FormContainer } from "./Elements";
import SignInImg from "../../assets/images/signin-img.jpg";
import SignInForm from "../../Components/LayoutComponents/Forms/SignInForm";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const LoginScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SignInContainer
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -1000 }}
      transition={{
        duration: 2,
        type: "tween",
        ...transition,
      }}
    >
      <ImageContainer src={SignInImg} alt="SignInImg" />
      <FormContainer bgImg={SignInImg}>
        <SignInForm />
      </FormContainer>
    </SignInContainer>
  );
};

export default LoginScreen;
