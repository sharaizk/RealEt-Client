import styled from "styled-components";
import { Tabs,Button } from "antd";
const { TabPane } = Tabs;
export const UpgradeAccountContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CustomTabs = styled(Tabs)`
  width: 100%;
  & .ant-tabs-tab{
    &:hover{
      color: #F56E28 !important;
    }
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: #F56E28 !important;
  }
  & .ant-tabs-ink-bar {
    background: #F56E28 !important;
  }
`;

export const CustomTabpane = styled(TabPane)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSubmissionBtn = styled(Button)`

`
