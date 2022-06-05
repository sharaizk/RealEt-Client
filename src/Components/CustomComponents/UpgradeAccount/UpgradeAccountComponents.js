import styled from "styled-components";
import { Tabs, Button, Input, Upload } from "antd";
const { TabPane } = Tabs;
const { Dragger } = Upload;

export const UpgradeAccountContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;

export const CustomTabs = styled(Tabs)`
  width: 100%;
  & .ant-tabs-tab {
    &:hover {
      color: #f56e28 !important;
    }
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #f56e28 !important;
  }
  & .ant-tabs-ink-bar {
    background: #f56e28 !important;
  }
`;

export const CustomTabpane = styled(TabPane)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSubmissionBtn = styled(Button)`
  align-self: center;
  justify-self: center;
  background-color: #fc6e20;
  border: none;
  border-radius: 5px;
  &:hover {
    color: #fc6e20;
    background-color: #fff;
  }
`;

export const FormTitle = styled.h4`
  font-size: 1.3rem;
  color: #424242;
  font-weight: 400;
`;

export const TextField = styled(Input)`
  border-radius: 10px;
  padding: 10px;

  box-shadow: none;

  &:focus,
  :active {
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  &:hover {
    border: 1px solid #d9d9d9;
  }
`;

export const CustomDragger = styled(Dragger)`
  border-radius: 10px !important;
  &:hover {
    border-color: #fc6e20 !important;
  }
`;
