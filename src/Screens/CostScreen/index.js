import React, { useState } from "react";
import {
  CostScreenContainer,
  FormSection,
  HistorySection,
  TitleContainer,
  FormContainer,
  HistoryTitle,
  Card,
  AnimationSection,
  CalculatingText,
} from "./CostElements";
import CostCalculatorForm from "Components/LayoutComponents/Forms/CostCalculatorForm";
import {
  CostFormAnimation,
  CostHistoryScreenAnimation,
  CalculatingAnimation,
} from "utils/StepperAnimationConfiguration";
import { AnimatePresence } from "framer-motion";
import Lottie from "react-lottie-player";
import CalculationAnimation from "assets/animations/calculation.json";

const CostCalculator = () => {
  const [calculating, setCalculating] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const calculatePrice = (values) => {
    setCalculating(true);
    console.log(values);
    setTimeout(() => {
      setCalculating(false);
      setCalculatedPrice('1000pkr')
    },4000);
  };

  return (
    <CostScreenContainer>
      <TitleContainer>Cost Calculator</TitleContainer>
      <FormContainer>
        <AnimatePresence exitBeforeEnter>
          {!calculating && (
            <FormSection {...CostFormAnimation}>
              {calculatedPrice ? (
                <p>{calculatedPrice}</p>
              ) : (
                <CostCalculatorForm calculatePrice={calculatePrice} />
              )}
            </FormSection>
          )}
          {calculating && (
            <AnimationSection {...CalculatingAnimation}>
              <CalculatingText>Hold Up! We are calculating 🤓</CalculatingText>
              <Lottie
                loop
                play
                animationData={CalculationAnimation}
                style={{ width: "70%", height: "70%" }}
              />
            </AnimationSection>
          )}
        </AnimatePresence>
        <HistorySection {...CostHistoryScreenAnimation}>
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
