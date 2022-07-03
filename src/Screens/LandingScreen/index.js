import React, { useEffect } from "react";
import LandSection1 from "../../Components/LayoutComponents/LandSection/LandSection1";
import LandSection2 from "../../Components/LayoutComponents/LandSection/LandSection2";
import LandSection3 from "../../Components/LayoutComponents/LandSection/LandSection3";
import { BackTop } from "antd";
import { BackToTopElement } from "./LandingScreenElements";
import { ArrowUpOutlined } from "@ant-design/icons";
const LandingScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LandSection1 />
      <LandSection2 />
      <LandSection3 />
      <BackTop>
        <BackToTopElement>
          <ArrowUpOutlined />
        </BackToTopElement>
      </BackTop>
    </>
  );
};

export default LandingScreen;
