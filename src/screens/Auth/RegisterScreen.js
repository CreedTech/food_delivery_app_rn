import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import COLORS from "../../utils/COLORS";
import { DefaultTextInput, PhoneInput } from "../../components/TextInput";
import { Button } from "../../components/Buttons";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
// import { registerUser,  } from "../../Redux/Slice/authSlice";
import { registerUser } from "../../Redux/Slice/_authSlice";
import { Loader } from "../../components/Loader";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation, iconName }) => {
  const dispatch = useDispatch();

  const { loading, user, error, loggedIn, success } = useSelector(
    (state) => state.auth
  );

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    userType: "VENDOR",
  });
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.firstName) {
      handleError("Please input firstName", "firstName");
      isValid = false;
    }

    if (!inputs.lastName) {
      handleError("Please input lastName", "lastName");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 7) {
      handleError("Min password length of 7", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    dispatch(registerUser(inputs));
    console.log("I JUST REGISTERED TO FUDAPP ");
  };

  useEffect(() => {
    if (success) {
      navigation.navigate("OTP");
    }
  }, [success]);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const [fontsLoaded] = useFonts({
    "VisbyExtra-Bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-extrabold.otf"),
    // "VisbyExtra-DemiBold": require("../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyExtra-DemiBold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyCF-bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const _loading = error ? !loading : loading;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Loader title="Wait for few seconds" visible={loading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 30 }}
      >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
          <Text
            style={{
              color: COLORS.black,
              fontSize: 25,
              fontWeight: "800",
              fontFamily: "VisbyExtra-Bold",
            }}
          >
            Register
          </Text>

          <Text
            style={{
              color: COLORS.grey,
              fontSize: 16,
              marginVertical: 10,
              fontFamily: "VisbyCF-bold",

              top: 3,
              fontWeight: "400",
            }}
          >
            Please provide details below to register
          </Text>
          <View style={{ marginVertical: 20 }}>
            <DefaultTextInput
              onChangeText={(text) => handleOnchange(text, "firstName")}
              onFocus={() => handleError(null, "firstName")}
              // iconName="account-outline"
              // label="First Name"
              placeholder="First Name"
              error={errors.firstName}
            />
            <DefaultTextInput
              onChangeText={(text) => handleOnchange(text, "lastName")}
              onFocus={() => handleError(null, "lastName")}
              // iconName="account-outline"
              // label="First Name"
              placeholder="lastName"
              error={errors.lastName}
            />
            <DefaultTextInput
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              // iconName="email-outline"
              // label="Email"
              placeholder="Email"
              error={errors.email}
            />

            <DefaultTextInput
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              // iconName="lock-outline"
              // label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
            <Icon
              name={iconName}
              style={{ color: COLORS.darkBlue, fontSize: 22, marginRight: 10 }}
            />
            <PhoneInput
              // keyboardType="numeric"
              onChangeText={(text) => handleOnchange(text, "phone")}
              onFocus={() => handleError(null, "phone")}
              // iconName="phone-outline"
              // label="Phone Number"
              placeholder="Phone Number"
              error={errors.phone}
            />

            <Button
              color={COLORS.FuddBackgroundColor}
              title="Register"
              onPress={validate}
            />
            <Pressable onPress={() => navigation.navigate("SIGNUP")}>
              <Text
                style={{
                  color: COLORS.FuddBackgroundColor,
                  //   fontWeight: 'bold',
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                Already have account? Login
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default RegisterScreen;
