import React from "react";
import './style.css'
import LandSection1 from "../../Components/LayoutComponents/LandSection/LandSection1";
import LandSection2 from "../../Components/LayoutComponents/LandSection/LandSection2";
import LandSection3 from "../../Components/LayoutComponents/LandSection/LandSection3";

const LandingScreen = () => {
  return (
    <>
      <LandSection1 />
      <LandSection2 />
      <LandSection3 />
    </>
  );
};

export default LandingScreen;
