import { createSlice } from "@reduxjs/toolkit";

const baseURL = "https://fudap-staging.herokuapp.com/api/v1/";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const verifyOTP = createAsyncThunk(
  "otp/verify",
  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}otp/verifyOtp`, value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resendOTP = createAsyncThunk(
  "otp/resendOtp",
  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}otp/resendOtp`, value);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    otpRequest: (state) => {
      state.loading = true;
    },
    otpSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    otpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    otpResend: (state, action) => {
      state.loading = true;
    },

    otpResendSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },

    otpResendFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(verifyOTP.fulfilled, (state) => {
      state.loading = true;
      state.success = true;
      state.error = action.payload;
    });

    builder.addCase(resendOTP.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
  },
});

export const {
  otpRequest,
  otpSuccess,
  otpFailure,
  otpResend,
  otpResendFailure,
  otpResendSuccess,
} = otpSlice.actions;

export default otpSlice.reducer;
