import React from "react";
import {
  ListImage,
  ListTitle,
  DescContainer,
  ListLocation,
  ImageContainer,
  ListDesc,
  PriceTag,
  InfoContainer,
  InfoRow,
  InfoTitle,
  InfoDetail,
  List,
} from "./Elements";
import { Divider } from "antd";
const PropertyList = ({ propertyData }) => {
  return (
    <>
      {propertyData.map((property, i) => {
        return (
          <>
            <List
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
              key={i}
            >
              <ImageContainer>
                <ListImage
                  src="http://themestarz.net/html/zoner/assets/img/properties/property-01.jpg"
                  alt="property-thumb."
                />
              </ImageContainer>
              <DescContainer>
                <ListTitle>{property.title}</ListTitle>
                <ListLocation>Worthington, OH 43085</ListLocation>
                <PriceTag>PKR 1 Crore</PriceTag>
                <ListDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et dui vestibulum, bibendum purus sit amet, vulputate mauris.
                  Ut adipiscing gravida tincidunt...
                </ListDesc>
              </DescContainer>
              <InfoContainer>
                <InfoRow>
                  <InfoTitle>Status:</InfoTitle>
                  <InfoDetail>Sell</InfoDetail>
                </InfoRow>
                <InfoRow>
                  <InfoTitle>Size:</InfoTitle>
                  <InfoDetail>10 Marla</InfoDetail>
                </InfoRow>
                <InfoRow>
                  <InfoTitle>Type:</InfoTitle>
                  <InfoDetail>Residential</InfoDetail>
                </InfoRow>
                <InfoRow>
                  <InfoTitle>Virtual Tour:</InfoTitle>
                  <InfoDetail>N/A</InfoDetail>
                </InfoRow>
              </InfoContainer>
            </List>
            <Divider />
          </>
        );
      })}
    </>
  );
};

export default PropertyList;
