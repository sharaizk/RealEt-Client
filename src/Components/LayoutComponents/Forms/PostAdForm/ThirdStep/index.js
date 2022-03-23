import React, { useEffect, useRef } from "react";
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
const ThirdStep = ({ handleNextStep, handlePrevStep }) => {
  const [form] = useForm();
  const sizeRef = useRef(null);
  useEffect(() => {
    sizeRef.current.focus();
  }, [sizeRef]);

  const selectAfter = (
    <Form.Item name="size-unit" initialValue={"Marla"} noStyle>
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
          onFinish={(v) => console.log(v)}
          layout="vertical"
          requiredMark="optional"
          name="detail-info"
        >
          <Row gutter={{ xs: 0, md: 16 }}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="size"
                rules={[
                  {
                    required: true,
                    message: "Property Size is Required",
                  },
                ]}
              >
                <GroupTextField ref={sizeRef} addonAfter={selectAfter} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Property Price is Required",
                  },
                ]}
              >
                <TextField placeholder="Price" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
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
