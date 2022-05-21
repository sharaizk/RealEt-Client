import { SIGN_UP, SIGN_IN, LOAD_PROF, SIGN_OUT,SWITCH_ROLE } from "../types";
import server from "../../Axios/index";
import { notification } from "antd";
import { saveToken, deleteToken } from "../localstorage";

export const loadProfile = (token) => {
  return async (dispatch) => {
    try {
      const res = await server.get("/auth/my-profile", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      dispatch({ type: LOAD_PROF, payload: res.data.user });
    } catch (error) {
      notification["error"]({
        message: "OH OH",
        description:
          "Something went wrong with the sign up, Hold up til we fix it",
      });
      return error;
    }
  };
};

export const signUp = (formValues, profilePhoto) => {
  const { fullName, login, password="",socialId="",socialImage="" } = formValues;
  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("login", login);
  formData.append("password", password);
  formData.append("photo", profilePhoto);
  return async (dispatch) => {
    try {
      const res = !socialId ? await server.post("/auth/signup", formData) : await server.post('/auth/oauth-signup',{fullName,email:login,socialId,socialImage});
      if (res.status === 200) {
        notification["success"]({
          message: "Sign Up Successfull",
          description: `${res.data.message}`,
        });
      }
      dispatch({ type: SIGN_UP });
    } catch (error) {
      const message=error.response.data.message || "Something went wrong with the sign up, Hold up til we fix it"
      notification["error"]({
        message: "OH OH",
        description:
         message
      });
      return error;
    }
  };
};

export const signIn = (formValues) => {
  const { login, password="" } = formValues;
  return async (dispatch) => {
    try {
      const res = await server.post("/auth/login", { login, password });
      saveToken(res.data.token);
      const profileResponse = await server.get("/auth/my-profile", {
        headers: {
          Authorization: `Basic ${res.data.token}`,
        },
      });
      console.log(profileResponse)
      notification["success"]({
        message: "Welcome",
        description: `Welcome to RealEt ${profileResponse.data.user.fullName}`,
      });
      dispatch({ type: SIGN_IN, payload: profileResponse.data.user });
    } catch (error) {
      const msg = error?.response?.data?.message
        ? error.response.data.message
        : "Something went wrong with the sign up, Hold up til we fix it";
      notification["error"]({
        message: "OH OH",
        description: `${msg}`,
      });
      return msg;
    }
  };
};

export const switchRole = (role) => {
  return {type:SWITCH_ROLE,payload:role}
}

export const signOut = () => {
  deleteToken();
  return { type: SIGN_OUT };
};
