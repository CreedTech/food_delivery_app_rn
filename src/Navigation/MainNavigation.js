import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  HomeScreen,
  OnBoardingScreen,
  SplashScreen,
  FinishScreen,
  TrackOrder,
  PickUpScreen,
  ExpressLocation,
  MapLocationScreen,
  DeliveryDetailScreen,
  RequestRideScreen,
  RideRequestScreen,
  DeliveryHistory,
  MenuScreen,
} from "../screens";
import { RegisterScreen, OtpScreen, SignUpScreen } from "../screens/Auth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigation from "./DrawerNavigation";
import * as Linking from "expo-linking";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/Slice/_authSlice";
import CancelledOrder from "../screens/CancelledOrder";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const prefix = Linking.createURL("/");

const MainNavigation = () => {
  const [data, setData] = React.useState(null);

  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUser());
  }, []);
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        HOME: 'home',
        SPLASH: 'splash',
        REGISTER: 'register',
        OTP: 'otp',
        SIGNUP: 'signup',
        ONBOARDING: 'onboarding',
        MODAL: {
          path: 'modal',
          screens: {
            HOME: 'home',
            FINISH: 'finish',
            CANCELLED: 'cancelled',
            TRACK: 'track',
            MAP: 'map',
            PICK: 'pick',
            LOCATION: 'location',
            DELIVERY: 'delivery',
            FINALIZE: 'finalize',
            RIDE: 'ride',
            HISTORY: 'history'
          },
        },
      },
    },
  };

  async function handleDeepLink(event) {
    let { path, queryParams } = Linking.parse(event.url);
    console.log('====================================');
    console.log("Linking data");
    console.log('====================================');
    setData(queryParams.status);
    console.log("JSON.stringify(queryParams)");
    console.log(JSON.stringify(queryParams));
    // console.log(JSON.stringify(path));
    await AsyncStorage.setItem("queryParams", queryParams.status);

    // navigateToScreen('TRACK', queryParams);
  }
  const navigateToScreen = (screenName, params) => {
    const deepLinkUrl = Linking.createURL(screenName, params);
    Linking.openURL(deepLinkUrl);
  }

  useEffect(() => {
    async function getInitialURL() {
      const initialURL = await Linking.getInitialURL();
      if (initialURL) setData(Linking.parse(initialURL));
    }
    Linking.addEventListener("url", handleDeepLink);

    if (!data) {
      getInitialURL();
    }

    return () => {
      Linking.addEventListener("url").remove();
    };
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={screenOptions}>
        {user ? (
          <>
            <Stack.Screen component={DrawerNavigation} name="MODAL" />
            <Stack.Screen component={FinishScreen} name="FINISH" />
            <Stack.Screen component={CancelledOrder} name="CANCELLED"/>
            <Stack.Screen component={TrackOrder} name="TRACK" />
            <Stack.Screen component={MapLocationScreen} name="MAP" />
            <Stack.Screen component={PickUpScreen} name="PICK" />
            <Stack.Screen component={ExpressLocation} name="LOCATION" />
            <Stack.Screen component={DeliveryDetailScreen} name="DELIVERY" />
            <Stack.Screen component={RequestRideScreen} name="FINALIZE" />
            <Stack.Screen component={RideRequestScreen} name="RIDE" />
            <Stack.Screen component={DeliveryHistory} name="History" />
            <Stack.Screen component={HomeScreen} name="HOME" />
          </>
        ) : (
          <>
            <Stack.Screen component={SplashScreen} name="SPLASH" />
            
            <Stack.Screen component={RegisterScreen} name="REGISTER" />
            <Stack.Screen component={OtpScreen} name="OTP" />
            <Stack.Screen component={SignUpScreen} name="SIGNUP" />

            <Stack.Screen component={OnBoardingScreen} name="ONBOARDING" />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
