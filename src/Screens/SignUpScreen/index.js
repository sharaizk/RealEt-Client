import React, { useEffect } from "react";
import { SignUpContainer, ImageContainer, FormContainer } from "./Elements";
import SignUpImg from "../../assets/images/signup-img.jpg";
import SignUpForm from "../../Components/LayoutComponents/Forms/SignUpForm";
const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };
const SignUpScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SignUpContainer
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -1000 }}
      transition={{
        duration: 2,
        type: "tween",
        ...transition,
      }}
    >
      <ImageContainer src={SignUpImg} alt="Signup img" />
      <FormContainer>
        <SignUpForm />
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpScreen;
