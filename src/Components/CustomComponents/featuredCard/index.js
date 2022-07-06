import React from "react";
import {
  CardContainer,
  ImgContainer,
  DescContainer,
  Img,
  PropertyTitle,
  TopDesc,
  BottomDesc,
  PropertyCity,
  Price,
  PropertyPublish,
  VerifiedTag,
  VerifiedLogo,
  VerifiedText,
} from "./featuredCardElements";

import { Divider } from "antd";
import verifiedLogo from "../../../assets/images/logo2.png";
import { BiCheckDouble } from "react-icons/bi";
import "./style.css";
import { useNavigate } from "react-router-dom";
const FeaturedCard = ({ id, img, title, city, price, postedby, verified }) => {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate(`/property-detail/${id}`);
      }}
    >
      <ImgContainer>
        <Img src={img} alt="img" />
        {verified ? (
          <VerifiedTag>
            <VerifiedLogo src={verifiedLogo} />
            <BiCheckDouble color="#22BB33" />
            <VerifiedText>Verified</VerifiedText>
          </VerifiedTag>
        ) : null}
      </ImgContainer>
      <DescContainer>
        <TopDesc>
          <PropertyTitle>{title}</PropertyTitle>
          <PropertyCity>{city}</PropertyCity>
        </TopDesc>
        <Divider />
        <BottomDesc>
          <Price>
            <p>Price</p>
            <label>
              {price} <span>PKR</span>
            </label>
          </Price>
          <Divider type="vertical" />
          <PropertyPublish>{postedby}</PropertyPublish>
        </BottomDesc>
      </DescContainer>
    </CardContainer>
  );
};

export default FeaturedCard;
