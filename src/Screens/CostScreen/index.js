import React, { useState, useEffect } from "react";
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
  CalculatedPriceContainer,
  CostImg,
  CalculatedPriceTitle,
  ResetBtn,
  CardTitle,
  CardSubTitle,
  BookBtn,
} from "./CostElements";
import CostCalculatorForm from "Components/LayoutComponents/Forms/CostCalculatorForm";
import {
  CostFormAnimation,
  CostHistoryScreenAnimation,
  CalculatingAnimation,
} from "utils/StepperAnimationConfiguration";
import { AnimatePresence } from "framer-motion";
import Lottie from "react-lottie-player";
import { useMutation, useQuery } from "react-query";
import CalculationAnimation from "assets/animations/calculation.json";
import CostSrc from "../../assets/images/cost.svg";
import server from "../../Axios";
import { getToken } from "Redux/localstorage";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { PriceConvertor } from "helpers/PriceHelpers";

const CostCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [calculating, setCalculating] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const user = useSelector((state) => state.auth);

  const { data: historyData = [], refetch } = useQuery(
    ["History", user._id],
    async () => {
      const historyResponse = await server.get("/calculation/get", {
        headers: {
          Authorization: `Beared ${getToken()}`,
        },
      });
      return historyResponse.data.calculationHistory;
    }
  );

  const { data: priceData } = useQuery(["Prices"], async () => {
    const pricesResponse = await server.get("/material/material-price");
    return pricesResponse.data;
  });

  const { mutate } = useMutation(
    async (params) => {
      const storeHistoryResponse = await server.post(
        "/calculation/store",
        {
          size: params.size,
          type: params.type,
          price: params.price,
          structureClass: params.structureClass,
        },
        {
          headers: {
            Authorization: `Beared ${getToken()}`,
          },
        }
      );
      return storeHistoryResponse;
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const calculatePrice = (values) => {
    let price;
    setCalculating(true);
    if (values?.type === "gray") {
      price =
        priceData?.grayPrices[values.structureClass] * parseInt(values?.size);
    } else {
      price =
        priceData?.finishedPrices[values.structureClass] *
        parseInt(values?.size);
    }

    setTimeout(() => {
      setCalculating(false);
      setCalculatedPrice(price);
      mutate({
        size: values.size,
        type: values.type,
        price: price,
        structureClass: values.structureClass,
      });
    }, 4000);
  };

  const getClass = (value) => {
    if (value === "firstClassPrice") {
      return "Luxury";
    } else if (value === "secondClassPrice") {
      return "Economical";
    } else {
      return "Starter";
    }
  };

  return (
    <CostScreenContainer>
      <TitleContainer>Cost Calculator</TitleContainer>
      <FormContainer>
        <AnimatePresence exitBeforeEnter>
          {!calculating && (
            <FormSection {...CostFormAnimation}>
              {calculatedPrice ? (
                <CalculatedPriceContainer>
                  <CostImg src={CostSrc} alt="successimg" />
                  <CalculatedPriceTitle>
                    Calculated Price:
                    <br />
                    <span>{PriceConvertor(calculatedPrice)} PKR</span>
                  </CalculatedPriceTitle>
                  <ResetBtn onClick={() => setCalculatedPrice(0)}>
                    Calculate Again
                  </ResetBtn>
                  <Divider>OR</Divider>
                  <BookBtn to="/book-a-builder">Book a Builder</BookBtn>
                </CalculatedPriceContainer>
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
          {historyData?.map((card, i) => {
            return (
              <Card key={i}>
                <CardTitle>{PriceConvertor(card?.price)} PKR</CardTitle>
                <CardSubTitle>
                  {card?.size} sqft | {getClass(card?.structureClass)}
                </CardSubTitle>
              </Card>
            );
          })}
        </HistorySection>
      </FormContainer>
    </CostScreenContainer>
  );
};

export default CostCalculator;
