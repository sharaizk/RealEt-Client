import React from "react";
import {
  BuilderScreenContainer,
  AdvanceSearchContainer,
  PageTtile,
} from "./Elements";
import AdvanceSearchField from "Components/CustomComponents/advanceSearch";
const BookABuilder = () => {
  return (
    <BuilderScreenContainer>
      <AdvanceSearchContainer>
        <PageTtile>
          Search, discover and hire verified Builders
          <br />
          for your property project.
        </PageTtile>
        <AdvanceSearchField search="builders" />
      </AdvanceSearchContainer>
    </BuilderScreenContainer>
  );
};

export default BookABuilder;
