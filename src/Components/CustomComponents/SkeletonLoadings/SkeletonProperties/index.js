import React from "react";
import {
  ListTitle,
  DescContainer,
  ListLocation,
  ImageContainer,
  ListDesc,
  PriceTag,
  InfoContainer,
  InfoRow,
  List,
  ShimmerWrapper,
  Shimmer,
} from "./Elements";
import { Divider } from "antd";
const SkeletonProperties = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((list, i) => {
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
              <ImageContainer />
              <DescContainer>
                <ListTitle />
                <ListLocation />
                <PriceTag>PKR 1 Crore</PriceTag>
                <ListDesc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et dui vestibulum, bibendum purus sit amet, vulputate mauris.
                  Ut adipiscing gravida tincidunt...
                </ListDesc>
              </DescContainer>
              <InfoContainer>
                <InfoRow></InfoRow>
                <InfoRow></InfoRow>
                <InfoRow></InfoRow>
                <InfoRow></InfoRow>
              </InfoContainer>
              <ShimmerWrapper>
                <Shimmer />
              </ShimmerWrapper>
            </List>
            <Divider />
          </>
        );
      })}
    </>
  );
};

export default SkeletonProperties;
