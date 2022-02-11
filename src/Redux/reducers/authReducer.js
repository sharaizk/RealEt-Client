import { SIGN_OUT,SIGN_UP,SIGN_IN } from "../types";
const INITIAL_STATE={
    isSignedIn:false,
    userId:"",
    name:"",
    userName:"",
    email:"",
    profileImage:"",
    socialId:"",
    role:"Consumer"
}

const authReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SIGN_UP:
            return {...state}
        case SIGN_IN:
            return {...state}
        case SIGN_OUT:
            return {...state}
        default:
            return{...state}
    }
}

export default authReducer