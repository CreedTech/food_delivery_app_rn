import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getBalance = createAsyncThunk(
  "auth/login",
  async (inputs, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}wallet/blance`, inputs);
      console.log(response, "BALANCE RESPONSE");
      const balance = await response.balance;

      console.log(balance, "BALANCE FROM REDUX");

      await AsyncStorage.setItem("balance", JSON.stringify(balance));

      // Save token to AsyncStorage
      // await AsyncStorage.setItem("userId", response.data.user.userId);
      // await AsyncStorage.setItem("firstName", response.data.user.firstName);

      // return [firstName, userId];

      return balance;
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

const initialState = {
  userData: {},
  userId: null,
  balance: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "balance",
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
      state.loading = true;
      state.balance = action.payload;
      state.error = false;
      console.log("Balance Fufflied");
    });

    builder.addCase(getBalance.rejected, (state, action) => {
      state.error = action.payload;
      console.log("Balance Rejected Failed");
    });
  },
});

export const { setUserData, setUserId, setBalance } = userSlice.actions;

export default userSlice.reducer;
