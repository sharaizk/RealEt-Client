import React, { useState } from "react";
import {
  LandingScreenContainer,
  SectionContainer,
  BuyandSell,
} from "./section1Elements";
import { useNavigate } from "react-router-dom";
import AdvanceSearchField from "../../../CustomComponents/advanceSearch";
import { message } from "antd";

const LandSection1 = () => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState({
    propertyIntent: "sell",
    city: null,
    location: null,
    category: "",
  });
  const onSearchProperties = () => {
    if (!searchParam.city || !searchParam.location || !searchParam.category) {
      message.error("Please fill the form");
    } else {
      navigate(
        `/property-list/${searchParam.city}/${searchParam.location}/${searchParam.category}/${searchParam.propertyIntent}`
      );
    }
  };
  return (
    <LandingScreenContainer>
      <SectionContainer>
        <BuyandSell>
          Buy or Rent Properties
          <br />
          instantly
        </BuyandSell>
        <AdvanceSearchField
          search="properties"
          onSearchProperties={onSearchProperties}
          searchParam={searchParam}
          setSearchParam={setSearchParam}
        />
      </SectionContainer>
    </LandingScreenContainer>
  );
};

export default LandSection1;
