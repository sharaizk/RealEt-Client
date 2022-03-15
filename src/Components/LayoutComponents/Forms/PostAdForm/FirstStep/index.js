import React from "react";
import {
  StepContainer,
  BuyRentContainer,
  BuyRentButton,
  TextField,
  FieldsContainer,
  FieldLabel,
  RadioButtonsContainer,
  RadioBtn,
  SubTypeCat,
  SubTypeOption,
} from "./Elements";
import { Error } from "../PAFElements";
import { StepperTransition } from "../../../../../utils/StepperAnimationConfiguration";
import "../styles.scss";
const FirstStep = ({ values, setValues }) => {
  return (
    <StepContainer {...StepperTransition}>
      <BuyRentContainer>
        <BuyRentButton
          onClick={() => {
            setValues({
              ...values,
              propertyList: "Sell",
            });
          }}
          $active={values.propertyList === "Sell" ? true : false}
        >
          Sell
        </BuyRentButton>
        <BuyRentButton
          onClick={() => {
            setValues({
              ...values,
              propertyList: "Rent",
            });
          }}
          $active={values.propertyList === "Rent" ? true : false}
        >
          Rent
        </BuyRentButton>
      </BuyRentContainer>
      <FieldsContainer>
        <FieldLabel>Property Title</FieldLabel>
        <TextField
          placeholder="Property Title"
          value={values.title}
          onChange={(e) => {
            setValues({
              ...values,
              title: e.target.value,
            });
          }}
        />
        {values.title.length >= 1 && values.title.length <= 5 ? (
          <Error>*Title Should be greater than 5</Error>
        ) : null}
      </FieldsContainer>
      <FieldsContainer>
        <FieldLabel>Type of Property</FieldLabel>
        <RadioButtonsContainer
          onChange={(e) => {
            setValues({
              ...values,
              type: e.target.value,
            });
          }}
          value={values.type}
        >
          <RadioBtn value={"Residential"}>Residential</RadioBtn>
          <RadioBtn value={"Plot"}>Plot</RadioBtn>
          <RadioBtn value={"Commercial"}>Commercial</RadioBtn>
        </RadioButtonsContainer>
        <SubTypeCat
          placeholder="Select Subtype"
          defaultValue={values.propertySubType}
          onChange={(value) =>
            setValues({
              ...values,
              propertySubType: value,
            })
          }
        >
          <SubTypeOption value="House">House</SubTypeOption>
          <SubTypeOption value="Green House">Green House</SubTypeOption>
          <SubTypeOption value="Apartment">Apartment</SubTypeOption>
          <SubTypeOption value="Upper Portion">Upper Portion</SubTypeOption>
          <SubTypeOption value="Lower Portion">Lower Portion</SubTypeOption>
          <SubTypeOption value="Farm House">Farm House</SubTypeOption>
          <SubTypeOption value="Room">Room</SubTypeOption>
          <SubTypeOption value="Penthouse">Penthouse</SubTypeOption>
          <SubTypeOption value="Hotel Suites">Hotel Suites</SubTypeOption>
          <SubTypeOption value="Basement">Basement</SubTypeOption>
          <SubTypeOption value="Anexxe">Anexxe</SubTypeOption>
          <SubTypeOption value="Hostel">Hostel</SubTypeOption>
          <SubTypeOption value="Other">Other</SubTypeOption>
        </SubTypeCat>
      </FieldsContainer>
    </StepContainer>
  );
};

export default FirstStep;
