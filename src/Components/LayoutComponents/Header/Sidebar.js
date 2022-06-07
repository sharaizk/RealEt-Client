import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn1,
  Icon,
  CloseIcon,
  Profile,
  DropDownArea,
  DropDownLink,
  Button,
  Name,
} from "./SidebarElemets";
import { Avatar, Divider, Dropdown } from "antd";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
const Sidebar = ({
  isOpen,
  toggle,
  isSignedIn,
  fullName,
  profilePicture,
  onSignOut,
}) => {
  const DroppedSection = () => {
    return (
      <DropDownArea>
        <DropDownLink onClick={toggle} to="/dashboard">
          Go to Dashboard
          <BsFillCaretRightFill />
        </DropDownLink>
        <Divider />
        <Button
          onClick={() => {
            toggle();
            onSignOut();
          }}
        >
          Log Out
          <BiExit />
        </Button>
      </DropDownArea>
    );
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/costcalculator" onClick={toggle}>
            Cost Calculator
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/book-a-builder">Book a Builder</SidebarLink>
          <SidebarBtn1 onClick={toggle} to="/post-add">
            Post Ad
          </SidebarBtn1>
          {isSignedIn ? (
            <Dropdown overlay={DroppedSection}>
              <Profile>
                <Avatar src={profilePicture} />
                <Name>
                  {fullName} <BsFillCaretDownFill />
                </Name>
              </Profile>
            </Dropdown>
          ) : (
            <SidebarBtn1 to="/signin">Sign In</SidebarBtn1>
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
