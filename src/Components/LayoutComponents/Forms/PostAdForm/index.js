import React, { useState } from "react";
import { FormTitle, Error } from "./PAFElements";
import { Stepper } from "react-form-stepper";

import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import "./styles.scss";
import { MoveBtn, MoveContainer } from "./PAFElements";
import { AnimatePresence } from "framer-motion";

const PostAdForm = () => {
  const [step, setStep] = useState(0);
  const [step1, setStep1Value] = useState({
    propertyList: "Sell",
    type: "Residential",
    title: "",
    propertySubType: "Select Subtype",
  });
  const ChangeStep = (val) => {
    setStep(val);
  };

  const formFillChecker = () => {
    if (step1.title.length > 5) {
      return true;
    }
    return false;
  };

  return (
    <>
      <FormTitle>Enter property details to add your property</FormTitle>
      <Stepper
        steps={[
          { label: "Basic" },
          { label: "Location" },
          { label: "Detailed" },
          { label: "Finish" },
        ]}
        activeStep={step}
        styleConfig={{
          activeBgColor: "#fd6e21",
          completedBgColor: "#424242",
          size: "2em",
        }}
        connectorStateColors={true}
        connectorStyleConfig={{
          completedColor: "#424242",
          activeColor: "#fd6e21",
        }}
      />
      <AnimatePresence exitBeforeEnter>
        {step === 0 && (
          <FirstStep values={step1} setValues={setStep1Value} key="FirstStep" />
        )}
        {step === 1 && <SecondStep key="SecondStep" />}
        {step === 2 && <ThirdStep key="ThirdStep" />}
        {step === 3 && <FourthStep key="FourthStep" />}
      </AnimatePresence>
      {!formFillChecker() && <Error>*Please fill the form</Error>}
      <MoveContainer>
        <MoveBtn
          onClick={() => ChangeStep(step - 1)}
          disabled={step === 0 ? true : false}
        >
          Prev
        </MoveBtn>
        <MoveBtn
          onClick={() => {
            if (step !== 3 && formFillChecker()) {
              ChangeStep(step + 1);
            }
          }}
        >
          {step === 3 ? <>Publish</> : <>Next</>}
        </MoveBtn>
      </MoveContainer>
    </>
  );
};

export default PostAdForm;
