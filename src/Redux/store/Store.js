import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../Slice/navSlice";

import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Storage,
} from "redux-persist";

// import authSlice from "../Slice/authSlice";

import authSlice from "../Slice/_authSlice";
import otpSlice from "../Slice/otpSlice";
import userSlice from "../Slice/userSlice";
import rideSlice from "../Slice/rideSlice";
import LocationSlice from "../Slice/LocationSlice";
import walletSlice from "../Slice/walletSlice";
import paymentSlice from "../Slice/paymentSlice";

const rootReducer = combineReducers({
  nav: navReducer,
  auth: authSlice,
  otp: otpSlice,
  balance: userSlice,
  ride: rideSlice,
  location: LocationSlice,
  wallet: walletSlice,
  payment: paymentSlice,
});

const persistConfig = {
  key: "fuddap",
  version: 1,
  storage: AsyncStorage,
  // whitelist: ["map", "user", "delivery"],
  whitelist: ["nav"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },

      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         nav: navReducer
//     }
// })
