import React, { useEffect, useCallback } from "react";
import { AnimationContainer, SvgContainer } from "./elements";
import SVG from "../../../assets/images/loading.svg";
import { loadProfile } from "../../../Redux/actions/authActions";
import { getToken } from "../../../Redux/localstorage";
import { useDispatch, useSelector } from "react-redux";
const Loading = () => {
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
    <AnimationContainer>
      <SvgContainer src={SVG} alt="" />
    </AnimationContainer>
  );
};

export default Loading;
