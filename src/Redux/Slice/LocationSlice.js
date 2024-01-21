import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useSelector } from "react-redux";

const baseUrl = "https://fudap-staging.herokuapp.com/api/v1/";

export const _requestRide = createAsyncThunk(
  "auth/ride",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}request-ride`, inputs);
      console.log(response);

      const deliveryFee = await response.data.deliveryFee;

      console.log(deliveryFee, "DELIVERY FEE");

      await AsyncStorage.setItem("deliveryFee", JSON.stringify(deliveryFee));

      if (response.status === 201) {
        console.log("OK");
        console.log(resposnse);
        Alert.alert("Order has is Successfull");
      }
      console.log(resposnse.data);

      return deliveryFee;
    } catch (error) {
      console.log(error.message);
      console.log(error);
      if (error.request && error.status === 401) {
        console.log(eror.status === 401);
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const requestRide = createAsyncThunk(
  "auth/login",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}request-ride`, inputs);

      const deliveryFee = await response.data.deliveryFee;

      // await AsyncStorage.setItem("deliveryFee", JSON.stringify(deliveryFee));

      return deliveryFee;
    } catch (error) {
      console.log(error.response.status);
      // return thunkAPI.rejectWithValue(error.response.data);
    }
    if (error.request) {
      return rejectWithValue(error.request);
    } else {
      return rejectWithValue(error.message);
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    sender: null,
    receiver: null,
    error: null,
    latitude: null,
    longitude: null,

    senderLatLong: {
      longitude: null,
      latitude: null,
      name: null,
    },

    receiverLatLong: {
      longitude: null,
      latitude: null,
      name: null,
    },

    loading: false,

    deliveryFee: null,
    travelTimeInformation: null,
  },
  reducers: {
    setSenderLocation(state, action) {
      state.sender = action.payload;
    },
    setReceiverLocation(state, action) {
      state.receiver = action.payload;
    },

    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },

    _setSenderLatLon: (state, action) => {
      state.senderLatLong = action.payload;
    },

    _setReceiverLatLon: (state, action) => {
      state.receiverLatLong = action.payload;

      // state.latitude = action.payload;
      // state.longitude = action.payload;
    },

    setDeliveryFee: (state, action) => {
      state.deliveryFee = action.payload;
    },

    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(requestRide.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(requestRide.fulfilled, (state, action) => {
      state.loading = false;
      state.receiverLatLong = action.payload;
      state.senderLatLong = action.payload;
      state.deliveryFee = action.payload;
      console.log("FUFFILED");
    });

    builder.addCase(requestRide.rejected, (state, action) => {
      state.error = action.payload;
      console.log("REJECTED");
    });
  },
});

export const {
  setSenderLocation,
  setReceiverLocation,
  setLatitude,
  setLongitude,
  _setReceiverLatLon,
  _setSenderLatLon,
  setDeliveryFee,
  setTravelTimeInformation,
} = locationSlice.actions;

export const amount = (state) => state.location.deliveryFee;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

console.log(amount);
export default locationSlice.reducer;
