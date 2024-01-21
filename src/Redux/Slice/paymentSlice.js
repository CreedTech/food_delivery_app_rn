import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://fudap-staging.herokuapp.com/api/v1/";

const initialState = {
  requestId: null,
  redirect_url: null,
  loading: false,
  error: null,
};

export const createPayment = createAsyncThunk(
  "user/payment",
  async (inputs, rejectWithValue) => {
    try {
      const response = await axios.post(
        `${baseUrl}create-payment-link`,
        inputs
      );

      // const { requestId, redirect_url } = await response.data;

      console.log(response.data);

      return {
        requestId: response.data.requestId,
        redirect_url: response.data.redirect_url,
      };
    } catch (error) {
      if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setCreatePayment: (state, action) => {
      state.redirect_url = action.payload;
      state.requestId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createPayment.pending, (state, payload) => {
      state.loading = true;
    });

    builder.addCase(createPayment.fulfilled, (state, payload) => {
      state.redirect_url = action.payload;
      state.requestId = action.payload;
      state.loading = false;
      console.log(FUllfiled);
    });

    builder.addCase(createPayment.rejected, (state, payload) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setCreatePayment } = paymentSlice.actions;

// export const requestId = (state) => state?.payment?.requestId;
// export const redirect_url = (state) => state?.payment?.redirect;

export default paymentSlice.reducer;
