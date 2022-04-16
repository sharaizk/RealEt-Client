import React, { useEffect, useCallback } from "react";
import MainDashboard from "./MainDashboard";
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
      <Route path="/*" element={<MainDashboard />} />
    </Routes>
  );
};

export default Dashboard;
