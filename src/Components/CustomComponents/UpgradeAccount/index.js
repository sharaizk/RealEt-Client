import React from "react";
import {
  UpgradeAccountContainer,
  CustomTabpane,
  CustomTabs,
  FormSubmissionBtn
} from "./UpgradeAccountComponents";
import { useSelector } from "react-redux";
import { Form } from "antd";

const UpgrdeAccount = () => {
  const { role, secondaryRole } = useSelector((state) => state.auth);
  const activeKey = role !== 'admin' ? 1 : 2
  
  return (
    <UpgradeAccountContainer>
      <CustomTabs centered defaultActiveKey={activeKey}>
        {role !== "agent" && (
          <CustomTabpane tab="Become An Agent" key="1">
            Become An Agent
          </CustomTabpane>
        )}
        {secondaryRole === "builder" && (
          <CustomTabpane tab="Become A Builder" key="2">
            <Form
              name="become-a-builder"
            >
              H
            </Form>
          </CustomTabpane>
        )}
      </CustomTabs>
    </UpgradeAccountContainer>
  );
};

export default UpgrdeAccount;
