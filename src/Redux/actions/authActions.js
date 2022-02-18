import { SIGN_UP, SIGN_IN } from "../types";
import server from "../../Axios/index";
import { notification } from "antd";
export const signUp = (formValues) => {
  const { fullName, login, password } = formValues;
  return async (dispatch) => {
    try {
      const res = await server.post("/auth/signup", {
        fullName,
        login,
        password,
      });
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
      console.log(res);
      dispatch({ type: SIGN_IN });
    } catch (error) {
      console.log(error);
    }
  };
};
