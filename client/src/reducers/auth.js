import axios from "axios";
import jwt_decode from "jwt-decode";

// action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const CHECK_AUTH = "CHECK_AUTH";

// initial state

const initialState = {
  token: "",
  isAuth: false,
  id: "",
  email: "",
  role: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      const loginInfo = jwt_decode(payload.data.jwt);
      return {
        ...state,
        token: payload.data.jwt,
        isAuth: true,
        id: loginInfo.id,
        email: loginInfo.email,
        role: loginInfo.role,
      };
    case REGISTER:
      const registerInfo = jwt_decode(payload.data.jwt);
      return {
        ...state,
        token: payload.data.jwt,
        isAuth: true,
        id: registerInfo.id,
        email: registerInfo.email,
        role: registerInfo.role,
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
        isAuth: false,
        id: "",
        email: "",
        role: "",
      };
    default:
      return state;
  }
};

// actions

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      dispatch({ type: LOGIN, payload: response });
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:5000/registration", {
        email,
        password,
      });
      dispatch({ type: REGISTER, payload: response });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
