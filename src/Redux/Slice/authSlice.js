import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerAsset } from "react-native-web/dist/cjs/modules/AssetRegistry";
import { create } from "tailwind-react-native-classnames";
import { Alert } from "react-native";

const baseURL = "https://fudap-staging.herokuapp.com/api/v1/";

// const user = JSON.parse(AsyncStorage.getItem("user"));

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": AsyncStorage.getItem("token"),
    },
  };

  return headers;
};

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  userId: null,
  firstName: null,
};

const userToken = AsyncStorage.getItem("userToken")
  ? AsyncStorage.getItem("userToken")
  : null;

export const _userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, userType = "VENDDOR" }, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await axios.post(
      `${baseURL}/auth/login`,
      {
        email,
        password,
      }

      // config
    );
    AsyncStorage.setItem("userToken", data.userToken);
    return data;
  }
);

export const Login = createAsyncThunk(
  "auth/login",
  async ({ phone, password, userType = "VENDOR" }, { rejectWithValue }) => {
    return axios
      .post(`${baseURL}auth/login`, {
        phone,
        password,
        userType,
      })
      .then((response) => {
        if (response.data.accessToken) {
          AsyncStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data.accessToken);
        }

        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if (error.request) {
          return rejectWithValue(error.request);
        } else {
          return rejectWithValue(error.message);
        }
      });
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ password, phone, userType = "VENDOR" }, { rejectWithValue }) => {
    try {
      console.log(phone, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${baseURL}auth/login`,
        { password, phone, userType },
        config
      );
      let user = data.user;
      console.log(user, "USER");
      // console.log(data, "DATA");
      // store user's token in local storage
      AsyncStorage.setItem("user", JSON.stringify(response.data));
      console.log(response.data.accessToken);
      return data;
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.response.success);
      if (error.request) {
        return rejectWithValue(error.request);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    { email, firstName, lastName, password, phone, userType = "VENDOR" },
    { rejectWithValue }
  ) => {
    try {
      console.log(email, firstName, lastName, password, userType, phone);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${baseURL}user/register`,
        { firstName, email, password, phone, lastName, userType }
        // config
      );

      console.log(response);
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

export const getUsers = createAsyncThunk(
  "user/{id}",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}user/{id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      console.log("data", data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return rejectWithValue(e.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      }),
      builder.addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.userInfo;
      state.userToken = payload.userToken;
      state.success = true;
      state.userId = payload.userId;
    });

    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getUsers.pending, (state, { payload }) => {
      state.loading = false;
    });

    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      console.log("USER FETECHED");
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    });

    builder.addCase(getUsers.rejected, (state, { payload }) => {
      console.log("getUserByid");
      state.loading = false;
      state.error = payload;
    });

    //login

    // builder.addCase(Login.pending, (state, { payload }) => {
    //   state.loading = true;
    //   state.error = null;
    // });

    // builder.addCase(Login.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.userInfo = payload;
    //   state.userToken = payload.userToken;
    // });

    // builder.addCase(Login.rejected, (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // });
  },
});

export const _userId = (state) => state.auth.userId;

export default authSlice.reducer;
