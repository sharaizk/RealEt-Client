import React from "react";
import { Layout } from "antd";

import { AgentDashboardContainer } from "./AgentElements";
import {
  DashboardContainer,
  LinksContainer,
  LinkBtn,
} from "../DashboardElements";
import { FaUser, FaHome } from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { MdPending } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { GiUpgrade } from "react-icons/gi";
import { Routes, Route } from "react-router-dom";
import "../styles.scss";

const Agent = () => {
  const { Content, Sider } = Layout;

  return (
    <DashboardContainer>
      <AgentDashboardContainer>
        <Layout className="dashboard-layout">
          <Sider breakpoint="lg" collapsedWidth="0">
            <LinksContainer>
              <LinkBtn to="">
                <FaHome />
                Welcome
              </LinkBtn>
              <LinkBtn to="profile">
                <FaUser />
                Profile
              </LinkBtn>
              <LinkBtn to="chats">
                <BsChatSquareDotsFill />
                Chats
              </LinkBtn>
              <LinkBtn to="postedads">
                <SiHomeadvisor />
                Posted Ads
              </LinkBtn>
              <LinkBtn to="Pendingads">
                <MdPending />
                Pending Ads
              </LinkBtn>
              <LinkBtn to="settings">
                <GoSettings />
                Settings
              </LinkBtn>
              <LinkBtn to="upgrade-account">
                <GiUpgrade />
                Upgrade Account
              </LinkBtn>
            </LinksContainer>
          </Sider>
          <Layout>
            <Content>
              <Routes>
                <Route path="/" element={<p>Welcome Agent</p>} />
                <Route path="profile" element={<p>Profile</p>} />
                <Route path="chats" element={<p>Chats</p>} />
                <Route path="postedads" element={<p>Posted Ads</p>} />
                <Route path="pendingads" element={<p>Pending Ads</p>} />
                <Route path="settings" element={<p>Settings</p>} />
                <Route path="pendingads" element={<p>Pending Ads</p>} />
                <Route
                  path="upgrade-account"
                  element={<p>Upgrade Account</p>}
                />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </AgentDashboardContainer>
    </DashboardContainer>
  );
};

export default Agent;
