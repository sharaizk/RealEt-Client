import React from "react";
import { FeaturedContainer,FeaturedHead } from './section2Elements'
import FeaturedCard from "../../CustomComponents/featuredCard";

import './style.css'
const LandSection2 = () => {


  return (
    <FeaturedContainer>
      <FeaturedHead>Featured Properties</FeaturedHead>
      <FeaturedCard />
    </FeaturedContainer>
  );
};

export default LandSection2;
