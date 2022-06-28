import React from "react";
import {
  CostScreenContainer,
  FormSection,
  HistorySection,
  TitleContainer,
  FormContainer,
  HistoryTitle,
  Card,
} from "./CostElements";
import { Divider } from "antd";
import CostCalculatorForm from "Components/LayoutComponents/Forms/CostCalculatorForm";
const CostCalculator = () => {
  return (
    <CostScreenContainer>
      <TitleContainer>Cost Calculator</TitleContainer>
      <FormContainer>
        <FormSection>
          <CostCalculatorForm />
              </FormSection>
        <Divider type="vertical"/>
        <HistorySection>
          <HistoryTitle>History</HistoryTitle>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card, i) => {
            return <Card key={i}>S</Card>;
          })}
        </HistorySection>
      </FormContainer>
    </CostScreenContainer>
  );
};

export default CostCalculator;
