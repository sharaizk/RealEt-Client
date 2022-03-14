import React from "react";
import { FormTitle } from "./PAFElements";
import { Stepper } from "react-form-stepper";
import "./styles.scss";
const PostAdForm = () => {
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
        activeStep={2}
        styleConfig={{
          activeBgColor: "#fd6e21",
          completedBgColor: "#424242",
          size: "2em",
        }}
      />
    </>
  );
};

export default PostAdForm;
