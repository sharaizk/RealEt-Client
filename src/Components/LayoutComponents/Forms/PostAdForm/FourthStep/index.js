import React, { useState } from "react";
import { StepContainer, Question, Btn, BtnContainer } from "./Elements";
import { StepperTransition } from "../../../../../utils/StepperAnimationConfiguration";
import { Tooltip } from "antd";
import VTour from "../../../../CustomComponents/VTourBuilder";
import { MoveContainer, MoveBtn } from "../PAFElements";
import { useMutation } from "react-query";
const FourthStep = ({ data, handlePrevStep }) => {
  const [virtualTour, setVirtualTour] = useState(false);
  const handleAddPost = useMutation(async () => {
    console.log(data);
  });
  return (
    <StepContainer {...StepperTransition}>
      {!virtualTour ? (
        <>
          <Question>Do you want to add Virtual Tour?</Question>
          <BtnContainer>
            <Btn
              onClick={() => handlePrevStep()}
              backgroundcolor="#FFF"
              bordercolor="#fff"
              textcolor="#424242"
            >
              Prev
            </Btn>
            <Tooltip title="Will Publish your Ad">
              <Btn
                backgroundcolor="#FFF"
                textcolor="#545454"
                bordercolor={"rgba(66, 66, 6,0.25)"}
                onClick={handleAddPost.mutate}
              >
                No
              </Btn>
            </Tooltip>
            <Tooltip title="Add Virtual Tour">
              <Btn
                backgroundcolor="#fc6e20"
                textcolor="#fff"
                bordercolor="#fc6e20"
                onClick={() => setVirtualTour(true)}
              >
                Yes
              </Btn>
            </Tooltip>
          </BtnContainer>
        </>
      ) : (
        <>
          <VTour />
          <MoveContainer>
            <MoveBtn onClick={() => setVirtualTour(false)}>
              Cancel VTour
            </MoveBtn>
            <MoveBtn>Publish</MoveBtn>
          </MoveContainer>
        </>
      )}
    </StepContainer>
  );
};

export default FourthStep;
