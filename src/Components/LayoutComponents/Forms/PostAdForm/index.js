import React, { useCallback, useState } from "react";
import { FormTitle } from "./PAFElements";
import { Stepper } from "react-form-stepper";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import "./styles.scss";
import { AnimatePresence } from "framer-motion";

const PostAdForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const handleNextStep = useCallback(
    (formData) => {
      setData({
        ...data,
        ...formData,
      });
      if (step < 4) {
        setStep(step + 1);
      }
    },
    [data, step]
  );
  const handlePrevStep = useCallback(() => {
    setStep(step - 1);
  }, [step]);

  return (
    <>
      {/* <Prompt
        when={data.title ? true : false}
        message="You have unsaved changes, are you sure you want to leave"
      /> */}
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
          <FirstStep
            data={data}
            key="FirstStep"
            handleNextStep={handleNextStep}
          />
        )}
        {step === 1 && (
          <SecondStep
            data={data}
            key="SecondStep"
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        )}
        {step === 2 && (
          <ThirdStep
            key="ThirdStep"
            data={data}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        )}
        {step === 3 && (
          <FourthStep
            key="FourthStep"
            data={data}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PostAdForm;
