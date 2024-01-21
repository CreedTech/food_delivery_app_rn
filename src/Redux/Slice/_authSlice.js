import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
const baseUrl = "https://fudap-staging.herokuapp.com/api/v1/";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Define initial state
const initialState = {
  user: null,
  firstName: null,
  loggedIn: false,
  loading: false,
  error: null,
  success: false,
  userData: {},
  userId: null,
  status: "idle",
};

// Define async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (inputs, rejectWithValue) => {
    try {
      const response = await axios.post(`${baseUrl}user/register`, inputs);

      // console.log(response);
      // Save token to AsyncStorage
      await AsyncStorage.setItem("token", response.data.token);

      return response.data.user;
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Define async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (inputs, { rejectWithValue }) => {
    console.log(inputs);
    try {
      const response = await axios.post(`${baseUrl}auth/login`, inputs);

      const user = await response.data.user;

      await AsyncStorage.setItem("user", JSON.stringify(user));

      // Save token to AsyncStorage
      // await AsyncStorage.setItem("userId", response.data.user.userId);
      // await AsyncStorage.setItem("firstName", response.data.user.firstName);

      // return [firstName, userId];

      return user;
    } catch (error) {
      console.log(error.response.status);
      return rejectWithValue(error.response.data);
    }
    if (error.request) {
      return rejectWithValue(error.request);
    } else {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}auth/logout`);

      console.log(response);

      const data = await response.data;

      // await AsyncStorage.setItem("user", JSON.stringify(user));

      // Save token to AsyncStorage
      // await AsyncStorage.setItem("userId", response.data.user.userId);
      // await AsyncStorage.removeItem("data", response.data);

      // return [firstName, userId];

      return data;
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

// Define async thunk for getting user by ID
export const getUserById = createAsyncThunk(
  "auth/getUserById",
  async (userId, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(`${baseUrl}user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      // return rejectWithValue(error.response.data);
    }
    if (error.request) {
      return rejectWithValue(error.request);
    } else {
      return rejectWithValue(error.message);
    }
  }
);

// Define auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Define reducer to clear user data
    clearUserData: (state) => {
      state.user = null;
      state.loggedIn = false;
      state.loading = false;
      state.error = null;
    },
    setUserFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle pending states for async thunks
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.status = "loading";
      state.loggedIn = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.status = "loading";
      state.loggedIn = false;
    });
    builder.addCase(getUserById.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.status = "loading";
    });

    // Handle fulfilled states for async thunks
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.loading = false;
      state.success = action.payload;
      state.error = null;
      state.status = "succeeded";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.loading = false;
      state.error = null;
      state.success = action.payload;
      state.userId = action.payload;
      state.firstName = action.payload;
      state.status = "succeeded";
      console.log("FULLIELD");
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = action.payload;
      state.loading = false;
      state.error = null;
      state.firstName = action.payload;
      state.userData = action.payload;
      state.userId = action.payload;
      state.status = "succeeded";
      console.log("GETUSERFUFFIELD");
    });

    // Handle rejected states for async thunks
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loggedIn = false;
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loggedIn = false;
      state.loading = false;
      state.error = action.payload;
      state.status = "failed";
      // console.log("state.error");
      console.log(state.error);
    });

    builder.addCase(getUserById.rejected, (state, action) => {
      state.loggedIn = false;
      state.error = action.payload;
      state.status = "failed";
      state.loading = false;
      // state.firstName = action.payload;
      // state.userData = action.payload;
      // state.userId = action.payload;
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      console.log("LOGOUTPENDIN");
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
      state.loggedIn = false;
      state.success = false;
      console.log("LOGOUTFULFILLED");
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("LOGOUTREJECTED");
    });
  },
});

export const {
  clearUserData,
  setUserFirstName,
  setUserData,
  setUserId,
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
