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

  const featureList = [
    {
      img:"https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title:"Paragon House",
      city:"Lahore",
      price:"2.15 Crore",
      postedby:"S States"
    },
    {
      img:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title:"Ali House",
      city:"Lahore",
      price:"2.25 Crore",
      postedby:"S States"
    },
    {
      img:"https://images.unsplash.com/photo-1630650228493-a60075b9e8e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title:"Twin House",
      city:"Lahore",
      price:"2.25 Crore",
      postedby:"S States"
    },
    {
      img:"https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title:"KH House",
      city:"Lahore",
      price:"3 Crore",
      postedby:"S States"
    }
  ]

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
    { width:960, itemsToShow: 3, itemsToScroll: 3 },
  ];

  const RenderFeatured=()=>{
    return featureList.map((list)=>{
      return <FeaturedCard img={list.img}/>
    })
  }

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
          easing="cubic-bezier(.44,.53,.66,1.06)"
          transitionMs={700}
        >
          {RenderFeatured()}
          
        </Carousel>
      </CarouselContainer>
    </FeaturedContainer>
  );
};

export default LandSection2;
