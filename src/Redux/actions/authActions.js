import { SIGN_UP, SIGN_IN } from "../types";
import server from "../../Axios/index";
import { notification } from "antd";
import { saveToken } from "../localstorage";
export const signUp = (formValues, profilePhoto) => {
  const { fullName, login, password } = formValues;
  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("login", login);
  formData.append("password", password);
  formData.append("photo", profilePhoto);
  return async (dispatch) => {
    try {
      const res = await server.post("/auth/signup", formData);
      if (res.status === 200) {
        notification["success"]({
          message: "Sign Up Successfull",
          description: `${res.data.message}`,
        });
      }
      dispatch({ type: SIGN_UP });
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

export const signIn = (formValues) => {
  const { login, password } = formValues;
  return async (dispatch) => {
    try {
      const res = await server.post("/auth/login", { login, password });
      saveToken(res.data.token);
      dispatch({ type: SIGN_IN });
    } catch (error) {
      console.log(error);
    }
  };
};
