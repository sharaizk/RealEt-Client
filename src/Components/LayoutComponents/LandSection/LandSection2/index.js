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
import FeaturedCard from "../../../CustomComponents/featuredCard";
import CaroArrow from "../../../CustomComponents/CaroArrow";
import NoPropertyAnimation from "../../../../assets/animations/nofeature.json";
import SkeletonFeaturedCard from "../../../CustomComponents/SkeletonLoadings/SkeletonFeaturedCard";
import Lottie from "react-lottie-player";
import { useQuery } from "react-query";
import server from "../../../../Axios";
const LandSection2 = () => {
  const { data: featuredData = [], isLoading } = useQuery(
    ["Featured"],
    async () => {
      const featuredResponse = await server.get("/properties/featured-ads");
      return featuredResponse.data;
    }
  );
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 1 },
    { width: 955, itemsToShow: 3, itemsToScroll: 1 },
  ];

  const RenderFeatured = () => {
    return featuredData.map((list, i) => {
      return (
        <FeaturedCard
          id={list._id}
          key={list._id}
          img={list.photos[0]}
          title={list.title}
          city={list.city_data.name}
          price={list.info.price}
          postedby={list.userId.fullName}
          verified={true}
        />
      );
    });
  };

  const RenderSkeleton = () => {
    return [1, 2, 3].map((i) => {
      return <SkeletonFeaturedCard key={i} />;
    });
  };

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
        {featuredData.length ? (
          <Carousel
            pagination={false}
            itemPadding={[10, 0]}
            breakPoints={breakPoints}
            renderArrow={({ type, onClick, isEdge }) => {
              return (
                <CaroArrow event={onClick} disabled={isEdge} type={type} />
              );
            }}
            showEmptySlots={false}
            easing="cubic-bezier(.44,.53,.66,1.06)"
            transitionMs={700}
          >
            {!isLoading ? RenderFeatured() : RenderSkeleton()}
          </Carousel>
        ) : (
          <>
            <Lottie
              animationData={NoPropertyAnimation}
              loop
              play
              placeholder="No Featured Property"
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
              }}
              style={{
                width: "50%",
              }}
            />
            <p>No Featured Ad Available</p>
          </>
        )}
      </CarouselContainer>
    </FeaturedContainer>
  );
};

export default LandSection2;
