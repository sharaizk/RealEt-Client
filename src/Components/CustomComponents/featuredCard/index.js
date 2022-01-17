import React from "react";
import {
  CardContainer,
  ImgContainer,
  DescContainer,
  Img
} from "./featuredCardElements";

import './style.css'
const FeaturedCard = ({img}) => {
  return (
    <CardContainer>
      <ImgContainer>
        <Img src={img} alt=""/>
      </ImgContainer>
      <DescContainer>
        S
      </DescContainer>
    </CardContainer>
  );
};

export default FeaturedCard;
