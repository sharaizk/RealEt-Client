import React, { useRef, useEffect } from "react";
import {
  StepContainer,
  BuyRentButton,
  TextField,
  RadioButtonsContainer,
  RadioBtn,
  SubTypeCat,
  SubTypeOption,
  CheckboxGroup,
  CustomCheckBox,
} from "./Elements";
import Schema from "async-validator";
import { StepperTransition } from "../../../../../utils/StepperAnimationConfiguration";
import { MoveContainer, MoveBtn } from "../PAFElements";
import "../styles.scss";
import { Form } from "antd";
import { HotKeys } from "react-hotkeys";
import { stepFormMap } from "../../../../../utils/Hotkeys";
import { Row, Col } from "antd";
import { FeatureOptions, UtilityOptions } from "../../../../../helpers/PostAd";
Schema.warning = function () {};

const FirstStep = ({ data, handleNextStep }) => {
  const [form] = Form.useForm();
  const selectRef = useRef(null);
  const btnRef = useRef(null);
  const handlers = {
    moveNext() {
      form
        .validateFields()
        .then((values) => {
          handleNextStep(values);
        })
        .catch((errorInfo) => {
          console.log(errorInfo);
        });
    },
  };

  useEffect(() => {
    if (btnRef) {
      btnRef.current.focus();
    }
  }, [btnRef]);
  return (
    <StepContainer {...StepperTransition}>
      <HotKeys keyMap={stepFormMap} handlers={handlers}>
        <Form
          onFinish={handleNextStep}
          form={form}
          name="step1"
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="buyrent"
            rules={[{ required: true, message: "Buy or Rent is Required" }]}
            initialValue={data.buyrent ? data.buyrent : "Rent"}
          >
            <RadioButtonsContainer>
              <BuyRentButton value="Rent">Rent</BuyRentButton>
              <BuyRentButton value="Sell">Sell</BuyRentButton>
            </RadioButtonsContainer>
          </Form.Item>
          <Form.Item
            name="title"
            label="Property Title"
            rules={[
              {
                required: true,
                message: "Title is required",
              },
              {
                min: 5,
                message: "Title should alteast be 5 letters long",
              },
            ]}
            initialValue={data.title ? data.title : ""}
          >
            <TextField placeholder="Property Title" />
          </Form.Item>
          <Form.Item
            label="Type of Property"
            name="type"
            rules={[
              {
                required: true,
                message: "Property type is required",
              },
            ]}
            initialValue={data.type ? data.type : "Residential"}
          >
            <RadioButtonsContainer>
              <RadioBtn value={"Residential"}>Residential</RadioBtn>
              <RadioBtn value={"Plot"}>Plot</RadioBtn>
              <RadioBtn value={"Commercial"}>Commercial</RadioBtn>
            </RadioButtonsContainer>
          </Form.Item>
          <Form.Item
            label="Sub Type"
            name="subtype"
            rules={[
              {
                required: true,
                message: "Property Sub type is required",
              },
            ]}
            initialValue={data.subtype && data.subtype}
          >
            <SubTypeCat
              ref={selectRef}
              placeholder="Select Subtype"
              onSelect={() => {
                selectRef.current.blur();
                btnRef.current.focus();
              }}
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
          </Form.Item>
          <Form.Item
            name="features"
            label="Property Features"
            rules={[{ required: true, message: "Please Select A Feature" }]}
            initialValue={data?.features}
          >
            <CheckboxGroup>
              <Row>
                {FeatureOptions.map((Feature, i) => {
                  return (
                    <Col key={i} xs={{ span: 12 }} md={{ span: 6 }}>
                      <CustomCheckBox value={Feature.feature}>
                        {Feature.feature}
                      </CustomCheckBox>
                    </Col>
                  );
                })}
              </Row>
            </CheckboxGroup>
          </Form.Item>
          <Form.Item
            name="utilities"
            label="Utilities"
            rules={[{ required: true, message: "Please Select an utility" }]}
            initialValue={data?.utilities}
          >
            <CheckboxGroup>
              <Row>
                {UtilityOptions.map((Utility, i) => {
                  return (
                    <Col key={i} xs={{ span: 12 }} md={{ span: 6 }}>
                      <CustomCheckBox value={Utility.utility}>
                        {Utility.utility}
                      </CustomCheckBox>
                    </Col>
                  );
                })}
              </Row>
            </CheckboxGroup>
          </Form.Item>
          <MoveContainer>
            <MoveBtn
              // onClick={() => ChangeStep(step - 1)}
              disabled
            >
              Prev
            </MoveBtn>
            <MoveBtn ref={btnRef} htmlType="submit">
              Next
            </MoveBtn>
          </MoveContainer>
        </Form>
      </HotKeys>
    </StepContainer>
  );
};

export default FirstStep;
