import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { ConsumerDashboardContainer } from "./ConsumerElements";
import {
  DashboardContainer,
  LinksContainer,
  LinkBtn,
} from "../DashboardElements";
import "../styles.scss";

import { ConsumerLinks, ConsumerRoutes } from "helpers/Dashboard";
import { useSelector } from "react-redux";
const MainDashboard = () => {
  const { Content, Sider } = Layout;
  const { activeRole } = useSelector((state) => state.auth);
  return (
    <DashboardContainer>
      <ConsumerDashboardContainer>
        <Layout className="dashboard-layout">
          <Sider className="side-bar" breakpoint="lg" collapsedWidth="0">
            <LinksContainer>
              {activeRole === "Consumer" &&
                ConsumerLinks.map((link) => (
                  <LinkBtn key={link.key} to={link.to}>
                    {link.icon}
                    {link.title}
                  </LinkBtn>
                ))}
            </LinksContainer>
          </Sider>
          <Content>
            <Routes>
              {activeRole === "Consumer" &&
                ConsumerRoutes.map((route) => (
                  <Route
                    path={route.path}
                    key={route.key}
                    element={route.element}
                  />
                ))}
            </Routes>
          </Content>
        </Layout>
      </ConsumerDashboardContainer>
    </DashboardContainer>
  );
};

export default MainDashboard;
