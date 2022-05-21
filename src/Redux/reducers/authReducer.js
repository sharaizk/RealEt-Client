import { SIGN_OUT, SIGN_UP, SIGN_IN, LOAD_PROF,SWITCH_ROLE } from "../types";
const INITIAL_STATE = {
  isSignedIn: false,
  userId: "",
  fullName: "",
  email: "",
  profileImage: "",
  socialId: "",
  role: "consumer",
  otp: {
    status: false,
  },
  activeRole: "",
  secondaryRole:""
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state };
    case SIGN_IN:
      const {
        otp,
        _id: userId,
        fullName,
        email,
        profileImage,
        role,
        secondaryRole
      } = action.payload;
      return {
        ...state,
        isSignedIn: true,
        otp: otp,
        userId: userId,
        fullName: fullName,
        profileImage: profileImage,
        email: email,
        role: role,
        activeRole: role,
        secondaryRole:secondaryRole || ''
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: "",
        fullName: "",
        email: "",
        profileImage: "",
        socialId: "",
        role: "consumer",
        otp: {},
      };
    case LOAD_PROF:
      return {
        ...state,
        isSignedIn: true,
        otp: action.payload.otp,
        userId: action.payload._id,
        fullName: action.payload.fullName,
        profileImage: action.payload.profileImage,
        email: action.payload.email,
        role: action.payload.role,
        activeRole: action.payload.role,
        secondaryRole:action.payload.secondaryRole || ''
      };
    case SWITCH_ROLE:
      return {
        ...state,
        activeRole:action.payload
      }
    default:
      return { ...state };
  }
};

export default authReducer;
