import React from "react";
import {
  FeaturedContainer,
  SectionHead,
  SectionSubHead,
  CaptionContainer,
  CarouselContainer,
} from "./section2Elements";
import "./style.css";
const LandSection2 = () => {


  return (
    <FeaturedContainer>
      <CaptionContainer>
        <SectionHead>Featured Properties</SectionHead>
        <SectionSubHead>
          Find Real Estate Online, Browse through Properties from Verified
          Listings.
          <br />
          100% reliable, safe and secure investments
        </SectionSubHead>
      </CaptionContainer>
      <CarouselContainer>
      </CarouselContainer>
    </FeaturedContainer>
  );
};

export default LandSection2;
