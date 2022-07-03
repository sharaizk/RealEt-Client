import React from "react";
import { Form } from "antd";
import {
  FormContainer,
  RadioButtonsContainer,
  GrayFinishBtn,
  TextField,
  RadioBtn,
  RadioBtnContainer,
  CalculateBtn,
} from "./Elements";
const CostCalculatorForm = ({calculatePrice}) => {
  return (
    <FormContainer>
      <Form
        layout="vertical"
        requiredMark="optional"
        onFinish={(value) => calculatePrice(value)}
        style={{ width: "100%" }}
      >
        <Form.Item
          name="type"
          label="Type of Construction"
          rules={[{ required: true, message: "Please select the type" }]}
          initialValue={"gray"}
        >
          <RadioButtonsContainer>
            <GrayFinishBtn value="gray">Gray</GrayFinishBtn>
            <GrayFinishBtn value="finishing">Finished</GrayFinishBtn>
          </RadioButtonsContainer>
        </Form.Item>
        <Form.Item
          name="size"
          label="Size of your property in sqft:"
          rules={[{ required: true, message: "What's your property size?" }]}
          style={{
            marginTop: "3vh",
          }}
        >
          <TextField
            type="number"
            placeholder="Size of your property in SQFT"
          />
        </Form.Item>
        <Form.Item
          name="structureClass"
          label="Category"
          style={{
            marginTop: "3vh",
          }}
          rules={[{ required: true, message: "Please select the category" }]}
          initialValue={"firstClassPrice"}
        >
          <RadioBtnContainer>
            <RadioBtn value={"firstClassPrice"}>Luxury</RadioBtn>
            <RadioBtn value={"secondClassPrice"}>Economical</RadioBtn>
            <RadioBtn value={"thirdClassPrice"}>Starter</RadioBtn>
          </RadioBtnContainer>
        </Form.Item>
        <CalculateBtn htmlType="submit">Calculate</CalculateBtn>
      </Form>
    </FormContainer>
  );
};

export default CostCalculatorForm;
