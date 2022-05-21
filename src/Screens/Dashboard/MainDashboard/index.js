import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { ConsumerDashboardContainer,SwitchToText } from "./ConsumerElements";
import {
  DashboardContainer,
  LinksContainer,
  LinkBtn,
} from "../DashboardElements";
import "../styles.scss";

import { ConsumerLinks, ConsumerRoutes } from "helpers/Dashboard";
import { useSelector,useDispatch } from "react-redux";
import { switchRole } from "Redux/actions/authActions";
const MainDashboard = () => {
  const { Content, Sider } = Layout;
  const dispatch=useDispatch()
  const { activeRole,secondaryRole,role } = useSelector((state) => state.auth);
  const nonActiveRole = activeRole !== role ? role : secondaryRole 



  return (
    <DashboardContainer>
      <ConsumerDashboardContainer>
        <Layout className="dashboard-layout">
          <Sider className="side-bar" breakpoint="lg" collapsedWidth="0">
            <LinksContainer>
              {activeRole === "consumer" &&
                ConsumerLinks.map((link) => (
                  <LinkBtn key={link.key} to={link.to}>
                    {link.icon}
                    {link.title}
                  </LinkBtn>
                ))}
            </LinksContainer>
            {secondaryRole &&<SwitchToText onClick={()=>dispatch(switchRole(nonActiveRole))}>Switch To {nonActiveRole}</SwitchToText> }
          </Sider>
          <Content>
            <Routes>
              {activeRole === "consumer" &&
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
