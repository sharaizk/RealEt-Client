import React from "react";
import {
  LandingScreenContainer,
  SectionContainer,
  BuyandSell,
} from "./LandingScreenElements";

import AdvanceSearchField from "../../Components/CustomComponents/advanceSearch";

const LandingScreen = () => {
  return (
    <LandingScreenContainer>
      <SectionContainer>
        <BuyandSell>
          Buy and Sell Properties
          <br />
          instantly
        </BuyandSell>
        <AdvanceSearchField/>
      </SectionContainer>
    </LandingScreenContainer>
  );
};

export default LandingScreen;
