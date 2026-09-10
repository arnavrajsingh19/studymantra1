import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const getSafeToken = () => {
  try {
    const item = localStorage.getItem("token");
    if (!item || item === "undefined") return null;
    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  } catch {
    return null;
  }
};

const initialState = {
  signupData: null,
  loading: false,
  token: getSafeToken(),
=======
const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
>>>>>>> 2c363010b3869a01acc60909afe21dcfcbb6e5e8
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;