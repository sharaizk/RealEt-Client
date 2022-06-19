import React, { useState } from "react";
import { StepContainer, Question, Btn, BtnContainer } from "./Elements";
import { StepperTransition } from "utils/StepperAnimationConfiguration";
import { Tooltip, message } from "antd";
import VTour from "Components/CustomComponents/VTourBuilder";
import { MoveContainer, MoveBtn } from "../PAFElements";
import { useMutation } from "react-query";
import server from "../../../../../Axios/";
import { getToken } from "Redux/localstorage";
import { getConfig, destroy } from "react-pannellum";
const FourthStep = ({
  data,
  handlePrevStep,
  setData,
  setStep,
  isEdit,
  propertyId,
}) => {
  const [virtualTour, setVirtualTour] = useState(false);
  const token = getToken();
  let hide;
  const handleAddPost = useMutation(
    async (cvirtualTour = {}) => {
      hide = message.loading("Publishing your add...", 0);
      const info = {
        price: data?.price,
        coords: {
          lng: 31.582045,
          ltd: 74.329376,
        },
        block: data?.block,
        sector: data?.sector,
        features: data?.features,
        utilities: data?.utilities,
        size: data?.size,
        unit: data?.unit,
      };
      const formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("type", data?.type);
      formData.append("propertySubType", data?.propertySubType);
      formData.append("propertyIntent", data?.propertyIntent);
      formData.append("city", data?.city);
      formData.append("location", data?.location);
      formData.append("info", JSON.stringify(info));
      formData.append("virtualTour", JSON.stringify(cvirtualTour));
      for (let i = 0; i < data?.images.length; i++) {
        let image = data?.images[i].originFileObj;
        formData.append("photos", image);
      }
      const apiPath = isEdit
        ? server.put(`/properties/update/${propertyId}`, formData, {
            headers: {
              "x-access-token": token,
            },
          })
        : server.post("/properties/post", formData, {
            headers: {
              "x-access-token": token,
            },
          });
      const postAddResponse = await apiPath;
      if (virtualTour) destroy();
      return postAddResponse.data;
    },
    {
      onSuccess: () => {
        hide();
        message.success(
          "Ad published successfully, waiting for admin to approve it"
        );
        setData({});
        setStep(0);
      },
      onError: (error) => {
        console.log(error);
        hide();
        message.error("Something went wrong");
      },
    }
  );
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
                loading={handleAddPost.isLoading}
                onClick={() => handleAddPost.mutate()}
              >
                Publish
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
          <VTour scenes={data?.virtualTour} />
          <MoveContainer>
            <MoveBtn onClick={() => setVirtualTour(false)}>
              Cancel VTour
            </MoveBtn>
            <MoveBtn
              onClick={() => {
                const scenes = getConfig().scenes;
                let virtualTourConfig = [];
                Object.keys(scenes).map((scene, i) => {
                  if (scene !== "NOTVALID") {
                    virtualTourConfig = [
                      ...virtualTourConfig,
                      { [scene]: scenes[Object.keys(scenes)[i]] },
                    ];
                  }
                  return null;
                });

                handleAddPost.mutate(virtualTourConfig);
              }}
            >
              Publish
            </MoveBtn>
          </MoveContainer>
        </>
      )}
    </StepContainer>
  );
};

export default FourthStep;
