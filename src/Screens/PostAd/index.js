import React from "react";
import {
  PostAddMainContainer,
  TitleDiv,
  BannerDiv,
  BannerImg,
  BannerDetails,
  BottomContainer,
  FormContainer,
} from "./PostElements";
import bannerImg from "../../assets/images/postedad.png";
import PostAdForm from "../../Components/LayoutComponents/Forms/PostAdForm";
const AddProperty = () => {
  return (
    <PostAddMainContainer>
      <TitleDiv>Add Property</TitleDiv>
      <BottomContainer>
        <BannerDiv>
          <BannerDetails>
            Sell or Rent out your property
            <br />
            <span>Enter your property details and publish your ad</span>
          </BannerDetails>
          <BannerImg src={bannerImg} alt="" />
        </BannerDiv>
        <FormContainer>
          <PostAdForm />
        </FormContainer>
      </BottomContainer>
    </PostAddMainContainer>
  );
};

export default AddProperty;
