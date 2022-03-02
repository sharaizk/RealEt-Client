import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../../Redux/actions/authActions";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const onSignOut = () => {
    dispatch(signOut());
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <header>
      <Sidebar
        isSignedIn={state.isSignedIn}
        fullName={state.fullName}
        profilePicture={state.profileImage}
        isOpen={isOpen}
        toggle={toggle}
        onSignOut={onSignOut}
      />
      <Nav
        isSignedIn={state.isSignedIn}
        fullName={state.fullName}
        profilePicture={state.profileImage}
        isOpen={isOpen}
        toggle={toggle}
        onSignOut={onSignOut}
      />
    </header>
  );
};

export default Header;
