import React from "react";
import { FormTitle } from "./PAFElements";
import { Steps } from "antd";
import "./styles.scss";
const PostAdForm = () => {
  const { Step } = Steps;
  const steps = [
    {
      title: "Basic Info",
      content: "First-content",
    },
    {
      title: "Location Info",
      content: "Second-content",
    },
    {
      title: "Detailed Info",
      content: "Last-content",
    },
    {
      title: "Virtual Tour",
      content: "Last-content",
    },
    {
      title: "Image",
      content: "Last-content",
    },
    {
      title: "Publish",
      content: "Last-content",
    },
  ];
  return (
    <>
      <FormTitle>Enter property details to add your property</FormTitle>
      <Steps current={3}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
    </>
  );
};

export default PostAdForm;
