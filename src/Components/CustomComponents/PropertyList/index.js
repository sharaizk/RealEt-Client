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
  NotFound,
} from "./Elements";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";

import { PriceConvertor } from "helpers/PriceHelpers";
import ReactHtmlParser from "react-html-parser";
import NotFoundAnimation from "assets/animations/NotFound.json";
const PropertyList = ({ propertyData }) => {
  const navigate = useNavigate();
  return (
    <>
      {propertyData?.length > 0 ? (
        propertyData.map((property, i) => {
          return (
            <React.Fragment>
              <List
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                onClick={() => {
                  navigate(`/property-detail/${property._id}`);
                }}
                key={i}
              >
                <ImageContainer>
                  <ListImage src={property.photos[0]} alt="property-thumb." />
                </ImageContainer>
                <DescContainer>
                  <ListTitle>{property.title}</ListTitle>
                  <ListLocation>{property?.location_data?.name}</ListLocation>
                  <PriceTag>
                    PKR {property && PriceConvertor(property?.info?.price)}
                  </PriceTag>
                  <ListDesc>{ReactHtmlParser(property?.description)}</ListDesc>
                </DescContainer>
                <InfoContainer>
                  <InfoRow>
                    <InfoTitle>Status:</InfoTitle>
                    <InfoDetail>{property?.propertyIntent}</InfoDetail>
                  </InfoRow>
                  <InfoRow>
                    <InfoTitle>Size:</InfoTitle>
                    <InfoDetail>{`${property?.info.size} ${property?.info.unit}`}</InfoDetail>
                  </InfoRow>
                  <InfoRow>
                    <InfoTitle>Type:</InfoTitle>
                    <InfoDetail>{property?.type}</InfoDetail>
                  </InfoRow>
                  <InfoRow>
                    <InfoTitle>Virtual Tour:</InfoTitle>
                    <InfoDetail>N/A</InfoDetail>
                  </InfoRow>
                </InfoContainer>
              </List>
              <Divider />
            </React.Fragment>
          );
        })
      ) : (
        <>
          <NotFound>🙁 OOPS! No Property Found</NotFound>
          <Lottie animationData={NotFoundAnimation} loop play />
        </>
      )}
    </>
  );
};

export default PropertyList;
