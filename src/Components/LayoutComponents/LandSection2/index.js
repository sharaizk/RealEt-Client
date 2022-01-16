import React from "react";
import {
  FeaturedContainer,
  SectionHead,
  SectionSubHead,
  CaptionContainer,
  CarouselContainer,
} from "./section2Elements";
import "./style.css";
import Carousel from "react-elastic-carousel";
import FeaturedCard from "../../CustomComponents/featuredCard";
import CaroArrow from "../../CustomComponents/CaroArrow";
const LandSection2 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
    { width:960, itemsToShow: 3, itemsToScroll: 3 },
  ];

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
        <Carousel
          pagination={false}
          itemPadding={[10, 0]}
          breakPoints={breakPoints}
          renderArrow={({type, onClick, isEdge})=>{
            return(
              <CaroArrow event={onClick} disabled={isEdge} type={type}/>
            )
          }}
          showEmptySlots={false}
          easing="cubic-bezier(.26,.79,.75,.82)"
          transitionMs={700}
        >
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          
        </Carousel>
      </CarouselContainer>
    </FeaturedContainer>
  );
};

export default LandSection2;
