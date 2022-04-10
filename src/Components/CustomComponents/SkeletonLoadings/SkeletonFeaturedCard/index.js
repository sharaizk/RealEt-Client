import React from "react";
import {
  BottomDesc,
  CardContainer,
  DescContainer,
  ImgContainer,
  Price,
  PropertyCity,
  PropertyPublish,
  PropertyTitle,
  TopDesc,
  ShimmerWrapper,
  Shimmer,
} from "./SFCElements";
import { Divider } from "antd";
import "./style.css";
const SkeletonFeaturedCard = () => {
  return (
    <CardContainer>
      <ImgContainer />
      <DescContainer>
        <TopDesc>
          <PropertyTitle />
          <PropertyCity />
        </TopDesc>
        <Divider />
        <BottomDesc>
          <Price />
          <Divider type="vertical" />
          <PropertyPublish />
        </BottomDesc>
      </DescContainer>
      <ShimmerWrapper>
        <Shimmer />
      </ShimmerWrapper>
    </CardContainer>
  );
};

export default SkeletonFeaturedCard;
