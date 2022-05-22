import React from "react";
import {
  UpgradeAccountContainer,
  CustomTabpane,
  CustomTabs,
  FormTitle,
} from "./UpgradeAccountComponents";
import { useSelector } from "react-redux";
import BecomeABuilder from "Components/LayoutComponents/Forms/BecomeABuilder";
import BecomeAgent from "Components/LayoutComponents/Forms/BecomeAgent";
import "./style.scss";
const UpgrdeAccount = () => {
  const { role, secondaryRole } = useSelector((state) => state.auth);
  const activeKey = role !== "admin" ? 1 : 2;
  return (
    <UpgradeAccountContainer>
      <CustomTabs centered defaultActiveKey={activeKey}>
        {role !== "agent" && (
          <CustomTabpane tab="Become An Agent" key="1">
            <FormTitle>Become An Agent</FormTitle>
            <BecomeAgent />
          </CustomTabpane>
        )}
        {secondaryRole !== "builder" && (
          <CustomTabpane tab="Become A Builder" key="2">
            <FormTitle>Become A Builder</FormTitle>
            <BecomeABuilder />
          </CustomTabpane>
        )}
      </CustomTabs>
    </UpgradeAccountContainer>
  );
};

export default UpgrdeAccount;
