import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://fudap-staging.herokuapp.com/api/v1/";

export const getBalance = createAsyncThunk(
  "wallet/balance",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}wallet/balance`, userId);
      const balance = await response.data.balance;
      return balance;
    } catch (error) {
      if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getPayment = createAsyncThunk(
  "wallet/balance",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}payment/create-payment-link`,
        inputs
      );

      console.log(response, "BALANCE RESPONSE");

      const balance = await response.data;

      return balance;
    } catch (error) {
      if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  userData: {},
  userId: null,
  balance: null,
  loading: false,
  error: null,
  user: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Handle pending states for async thunks
    builder.addCase(getBalance.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.balance = action.payload;
      state.user = action.payload;
      state.error = false;
      console.log("Balance Fufflied");
    });

    builder.addCase(getBalance.rejected, (state, action) => {
      state.error = action.payload;
      console.log("Balance Rejected Failed");
    });
  },
});

export const { setUserData, setUserId, setBalance } = walletSlice.actions;

export default walletSlice.reducer;
