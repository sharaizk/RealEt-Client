import React, { useState, useRef, useEffect } from "react";
import { StepContainer, LocationCat, LocationOption } from "./Elements";
import { StepperTransition } from "../../../../../utils/StepperAnimationConfiguration";
import { MoveContainer, MoveBtn } from "../PAFElements";
import { HotKeys } from "react-hotkeys";
import { Form, Spin } from "antd";
import Schema from "async-validator";
import server from "../../../../../Axios";
import Map from "../../../../CustomComponents/Map";
import { stepFormMap } from "../../../../../utils/Hotkeys";

import { useQuery } from "react-query";

Schema.warning = function () {};

const SecondStep = ({ data, handleNextStep, handlePrevStep }) => {
  const citySelectRef = useRef(null);
  const locSelectRef = useRef(null);
  const btnRef = useRef(null);
  const [form] = Form.useForm();
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    citySelectRef.current.focus();
  }, [citySelectRef]);

  // ================================== || Fetching The Cities and Locations || ============
  const { data: cities, isLoading: isCityLoading } = useQuery(
    "Cities",
    async () => {
      const cityDataResponse = await server.get("/geography/cities");

      return cityDataResponse.data.data;
    }
  );
  const isCitySelected = selectedCity ? true : false;
  const { data: locations, isLoading: isLocationLoading } = useQuery(
    ["Location", selectedCity],
    async () => {
      const locationDataResponse = await server.get("/geography/locations", {
        params: {
          city_id: selectedCity,
        },
      });
      return locationDataResponse.data.data;
    },
    {
      enabled: isCitySelected,
    }
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

  return (
    <StepContainer {...StepperTransition}>
      <HotKeys keyMap={stepFormMap} handlers={handlers}>
        <Form
          form={form}
          onFinish={handleNextStep}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="city"
            label="Where's your place located?"
            rules={[
              {
                required: true,
                message: "Please select your city",
              },
            ]}
          >
            <Spin spinning={isCityLoading}>
              <LocationCat
                ref={citySelectRef}
                onSelect={() => {
                  citySelectRef.current.blur();
                  locSelectRef.current.focus();
                }}
                showSearch
                placeholder="Select your City"
                onChange={(v) => {
                  setSelectedCity(v);
                }}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                }
                allowClear
              >
                {cities?.map((city) => {
                  return (
                    <LocationOption name="city" key={city._id} value={city.key}>
                      {city.name}
                    </LocationOption>
                  );
                })}
              </LocationCat>
            </Spin>
          </Form.Item>
          <Spin spinning={isLocationLoading}>
            <Form.Item
              name="location"
              rules={[
                {
                  required: true,
                  message: "Please select your location",
                },
              ]}
            >
              <LocationCat
                ref={locSelectRef}
                onSelect={() => {
                  locSelectRef.current.blur();
                  btnRef.current.focus();
                }}
                showSearch
                placeholder="Select Location"
                disabled={!isCitySelected}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                }
                allowClear
              >
                {locations?.map((location) => {
                  return (
                    <LocationOption
                      name="location"
                      key={location._id}
                      value={location.key}
                    >
                      {location.name}
                    </LocationOption>
                  );
                })}
              </LocationCat>
            </Form.Item>
          </Spin>
          <Form.Item>
            <Map />
          </Form.Item>
          <MoveContainer>
            <MoveBtn onClick={handlePrevStep}>Prev</MoveBtn>
            <MoveBtn ref={btnRef} htmlType="submit">
              Next
            </MoveBtn>
          </MoveContainer>
        </Form>
      </HotKeys>
    </StepContainer>
  );
};

export default SecondStep;
