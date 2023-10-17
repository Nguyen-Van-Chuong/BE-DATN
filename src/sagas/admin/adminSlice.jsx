import { createSlice } from "@reduxjs/toolkit";
import {
  getObjectFromLocalStorage,
  saveObjectToLocalStorage,
  removeObjectFromLocalStorage,
} from "../../utils/localstorage";
const initialState = {
  token: getObjectFromLocalStorage("adminToken") || null,
  infoAdmin: getObjectFromLocalStorage("infoAdmin") || null,
  isAuthenticated: !!localStorage.getItem("adminToken"),
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    loginSuccess: (state, action) => {
      saveObjectToLocalStorage("adminToken", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    },
    logout: (state) => {
      localStorage.removeItem("adminToken");
      removeObjectFromLocalStorage("infoAdmin");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    },
    registerRequest: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    registerSuccess: (state) => {
      return {
        ...state,
        loading: false,
        error: null,
      };
    },
    requestFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
    refreshAccessTokenRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    refreshAccessTokenSuccess: (state, action) => {
      localStorage.setItem("adminToken", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    },
    setInfoAdmin: (state, action) => {
      saveObjectToLocalStorage("infoAdmin", action.payload);
      return {
        ...state,
        infoAdmin: action.payload,
      };
    },
  },
});
export const {
  loginRequest,
  loginSuccess,
  logout,
  registerRequest,
  requestFailure,
  registerSuccess,
  refreshAccessTokenRequest,
  refreshAccessTokenSuccess,
  setInfoAdmin,
} = adminSlice.actions;
export default adminSlice.reducer;
