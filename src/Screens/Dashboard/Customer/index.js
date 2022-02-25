import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { CustomerDashboardContainer } from "./CustomerElements";

const Customer = () => {
  const { Content,Sider } = Layout;

  return (
    <CustomerDashboardContainer>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              // style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </CustomerDashboardContainer>
  );
};

export default Customer;
