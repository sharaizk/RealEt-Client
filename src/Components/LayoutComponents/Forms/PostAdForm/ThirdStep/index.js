import React from "react";
import { StepContainer } from "./Elements";
import { StepperTransition } from "../../../../../utils/StepperAnimationConfiguration";
import { MoveContainer, MoveBtn } from "../PAFElements";
import { Form } from "antd";

const ThirdStep = ({ handleNextStep, handlePrevStep }) => {
  return (
    <StepContainer {...StepperTransition}>
      <Form layout="vertical" onFinish={handleNextStep} requiredMark="optional">
        <MoveContainer>
          <MoveBtn onClick={handlePrevStep}>Prev</MoveBtn>
          <MoveBtn htmlType="submit">Next</MoveBtn>
        </MoveContainer>
      </Form>
    </StepContainer>
  );
};

export default ThirdStep;
