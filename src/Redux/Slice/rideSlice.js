import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://fudap-staging.herokuapp.com/api/v1/";

const initialState = {
  senderAddress: "",
  senderLocationLatLng: {},
  senderLandMark: "",
  senderName: "",
  senderPhone: "",
  recipientAddress: "",
  recipientLocationLatLng: {},
  recipientLandMark: "",
  recipientName: "",
  recipientPhone: "",
  packageDetails: "",
  pickupTime: "",

  loading: null,
};

export const requestRide = createAsyncThunk(
  "auth/ride",
  async (inputs, rejectWithValue) => {
    try {
      const response = await axios.post(`${baseUrl}request-ride`, inputs);
      console.log(response);
      console.log(resposnse.data);
    } catch (error) {
      if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const rideRequestSlice = createSlice({
  name: "rideRequest",
  initialState,
  reducers: {
    setSenderAddress: (state, action) => {
      state.senderAddress = action.payload;
    },
    setSenderLocationLatLng: (state, action) => {
      state.senderLocationLatLng = action.payload;
    },
    setSenderLandMark: (state, action) => {
      state.senderLandMark = action.payload;
    },
    setSenderName: (state, action) => {
      state.senderName = action.payload;
    },
    setSenderPhone: (state, action) => {
      state.senderPhone = action.payload;
    },
    setRecipientAddress: (state, action) => {
      state.recipientAddress = action.payload;
    },
    setRecipientLocationLatLng: (state, action) => {
      state.recipientLocationLatLng = action.payload;
    },
    setRecipientLandMark: (state, action) => {
      state.recipientLandMark = action.payload;
    },
    setRecipientName: (state, action) => {
      state.recipientName = action.payload;
    },
    setRecipientPhone: (state, action) => {
      state.recipientPhone = action.payload;
    },
    setPackageDetails: (state, action) => {
      state.packageDetails = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    setUserId: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(requestRide.pending, (state, payload) => {
      state.loading = true;
      state.error = action.payload;
    });

    builder.addCase(requestRide.fulfilled, (state, payload) => {
      (state.loading = false), (state.senderLandMark = action.payload);
    });
  },
});

export const {
  setSenderAddress,
  setSenderLocationLatLng,
  setSenderLandMark,
  setSenderName,
  setSenderPhone,
  setRecipientAddress,
  setRecipientLocationLatLng,
  setRecipientLandMark,
  setRecipientName,
  setRecipientPhone,
  setPackageDetails,
  setPickupTime,
  setUserId,
} = rideRequestSlice.actions;

export default rideRequestSlice.reducer;
