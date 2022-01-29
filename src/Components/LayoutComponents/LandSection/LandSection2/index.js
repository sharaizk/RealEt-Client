import React, { useState,useEffect } from "react";
import {
  FeaturedContainer,
  SectionHead,
  SectionSubHead,
  CaptionContainer,
  CarouselContainer,
} from "./section2Elements";
import "./style.css";
import Carousel from "react-elastic-carousel";
import FeaturedCard from "../../../CustomComponents/featuredCard";
import CaroArrow from "../../../CustomComponents/CaroArrow";
import SkeletonFeaturedCard from "../../../CustomComponents/SkeletonLoadings/SkeletonFeaturedCard";
const LandSection2 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },5000)
  }, [])

  const featureList = [
    {
      img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Paragon House",
      city: "Lahore",
      price: "2.15 Crore",
      postedby: "S States",
      verified: true,
    },
    {
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title: "Ali House",
      city: "Karachi",
      price: "2.25 Crore",
      postedby: "S States",
      verified: true,
    },
    {
      img: "https://images.unsplash.com/photo-1630650228493-a60075b9e8e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Twin House",
      city: "Lahore",
      price: "10 Crore",
      postedby: "S States",
      verified: false,
    },
    {
      img: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "KH House",
      city: "Lahore",
      price: "3 Crore",
      postedby: "S States",
      verified: true,
    },
    {
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Street House",
      city: "Islamabad",
      price: "5 Crore",
      postedby: "S States",
      verified: true,
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 1 },
    { width: 955, itemsToShow: 3, itemsToScroll: 1 },
  ];

  const RenderFeatured = () => {
    return featureList.map((list, i) => {
      return (
        <FeaturedCard
          key={i}
          img={list.img}
          title={list.title}
          city={list.city}
          price={list.price}
          postedby={list.postedby}
          verified={list.verified}
        />
      );
    });
  };

  const RenderSkeleton=()=>{
    return [1,2,3].map((i)=>{
      return  <SkeletonFeaturedCard key={i}/>
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
          renderArrow={({ type, onClick, isEdge }) => {
            return <CaroArrow event={onClick} disabled={isEdge} type={type} />;
          }}
          showEmptySlots={false}
          easing="cubic-bezier(.44,.53,.66,1.06)"
          transitionMs={700}
        >
          {!loading ? (
            RenderFeatured()
          ) : (
            RenderSkeleton()
          )}
        </Carousel>
      </CarouselContainer>
    </FeaturedContainer>
  );
};

export default LandSection2;
