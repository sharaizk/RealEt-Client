import React, { useState, useEffect, useRef } from "react";
import {
  StepContainer,
  UnitCat,
  UnitOption,
  GroupTextField,
  TextField,
  CustomUpload,
} from "./Elements";
import { StepperTransition } from "../../../../../utils/StepperAnimationConfiguration";
import { MoveContainer, MoveBtn } from "../PAFElements";
import { Col, Form, Row } from "antd";
import TextEditor from "../../../../CustomComponents/TextEditor";
import { useForm } from "antd/lib/form/Form";
import { HotKeys } from "react-hotkeys";
import { stepFormMap } from "../../../../../utils/Hotkeys";
import { PriceConvertor } from "../../../../../helpers/PriceHelpers";
const ThirdStep = ({ data, handleNextStep, handlePrevStep }) => {
  const [form] = useForm();
  const sizeRef = useRef(null);
  const [price, setPrice] = useState(data?.price || "");
  useEffect(() => {
    sizeRef.current.focus();
  }, [sizeRef]);

  const PriceArrow = () => {
    const f = PriceConvertor(price);
    return <p>{f}</p>;
  };

  const selectAfter = (
    <Form.Item name="unit" initialValue={data?.unit || "Marla"} noStyle>
      <UnitCat placeholder="Unit">
        <UnitOption value="Kanal">Kanal</UnitOption>
        <UnitOption value="Marla">Marla</UnitOption>
        <UnitOption value="Acre">Acre</UnitOption>
        <UnitOption value="Ft2">
          Ft<sup>2</sup>
        </UnitOption>
        <UnitOption value="Yd2">
          Yd<sup>2</sup>
        </UnitOption>
        <UnitOption value="M2">
          M<sup>2</sup>
        </UnitOption>
      </UnitCat>
    </Form.Item>
  );

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
    movePrev() {
      handlePrevStep();
    },
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <StepContainer {...StepperTransition}>
      <HotKeys keyMap={stepFormMap} handlers={handlers}>
        <Form
          form={form}
          onFinish={handleNextStep}
          layout="vertical"
          requiredMark="optional"
          name="detail-info"
          onValuesChange={(v) => {
            if (v.price) {
              setPrice(v.price);
            }
          }}
        >
          <Row gutter={{ xs: 0, md: 16 }}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="size"
                initialValue={data?.size}
                rules={[
                  {
                    required: true,
                    message: "Property Size is Required",
                  },
                ]}
              >
                <GroupTextField
                  type={"number"}
                  ref={sizeRef}
                  addonAfter={selectAfter}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="price"
                initialValue={data?.price}
                rules={[
                  {
                    required: true,
                    message: "Property Price is Required",
                  },
                ]}
              >
                <TextField
                  placeholder="Price"
                  type="number"
                  addonAfter={<PriceArrow />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            initialValue={data?.description}
            rules={[
              {
                required: true,
                message: "Property Information is Required",
              },
              () => ({
                validator(_, value) {
                  if (form?.getFieldsValue()?.description?.length < 12) {
                    return Promise.reject(
                      new Error("Property Information is required")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <TextEditor
              value={form?.getFieldsValue().description}
              setValue={form?.setFieldsValue}
            />
          </Form.Item>

          <Form.Item
            name="images"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            initialValue={data?.images}
            rules={[
              () => ({
                validator(_, value) {
                  if (!value || value?.length === 0) {
                    return Promise.reject(
                      new Error("Please upload your property photos")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <CustomUpload
              accept="image/*"
              name="files"
              getValueFromEvent={normFile}
              beforeUpload={(file) => {
                return false;
              }}
              listType="picture-card"
            >
              <p className="ant-upload-drag-icon">{/* <InboxOutlined /> */}</p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </CustomUpload>
          </Form.Item>
          <MoveContainer>
            <MoveBtn onClick={handlePrevStep}>Prev</MoveBtn>
            <MoveBtn htmlType="submit">Next</MoveBtn>
          </MoveContainer>
        </Form>
      </HotKeys>
    </StepContainer>
  );
};

export default ThirdStep;
