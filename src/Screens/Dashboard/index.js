import React, { useEffect, useCallback } from "react";
import Agent from "./Agent";
import Consumer from "./Consumer";
import { Routes, Route } from "react-router-dom";
import { loadProfile } from "../../Redux/actions/authActions";
import { getToken } from "../../Redux/localstorage";
import { useDispatch, useSelector } from "react-redux";
const Dashboard = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const fetchProfile = useCallback(() => {
    const token = getToken();
    if (token && !authState.isSignedIn) {
      dispatch(loadProfile(token));
    }
  }, [authState.isSignedIn, dispatch]);
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <Routes>
      <Route path="/*" element={<Consumer />} />
      <Route path="/agent/*" element={<Agent />} />
    </Routes>
  );
};

export default Dashboard;
