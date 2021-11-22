import React from "react";
import {
  CardContainer,
  ImgContainer,
  InfoContainer,
  Name,
  Location,
  Price,
  ExtraInfoContainer,
  Cost,
  BasicContainer,
  Size,
  Verified
} from "./featuredCardElements";
import imgCard from "../../../assets/images/featureCard.jpg";
import {Divider} from 'antd'

import './style.css'
const FeaturedCard = () => {
  return (
    <CardContainer>
      <ImgContainer img={imgCard}/>
      <InfoContainer>
        <BasicContainer>
        <Name>Paragon House</Name>
        <Location>Valencia, Lahore</Location>
        
        </BasicContainer>
        <ExtraInfoContainer>
        <Price>Price</Price>
        <Cost>1 Crore <span>PKR</span></Cost>
        <Divider type="vertical" className="divider"/>
        <Size>10 Marla</Size>
        {/* <Tooltip title="Verified" arrowPointAtCenter color={"#42BA96"}> */}
        <Verified />
        {/* </Tooltip> */}
        </ExtraInfoContainer>
      </InfoContainer>
    </CardContainer>
  );
};

export default FeaturedCard;
