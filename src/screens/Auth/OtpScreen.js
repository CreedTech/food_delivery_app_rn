import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS } from "../../utils";
import { Button } from "../../components/Buttons";
import { DefaultTextInput } from "../../components/TextInput";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import { verifyOTP, resendOTP } from "../../Redux/Slice/otpSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  otpRequest,
  otpSuccess,
  otpFailure,
  otpResend,
  otpResendFailure,
  otpResendSuccess,
} from "../../Redux/Slice/otpSlice";

const OtpScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState("");
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const { loading, success, error } = useSelector((state) => state.otp);

  const CELL_COUNT = 6;
  const RESEND_OTP_TIME_LIMIT = 20;

  let resendOtpTimerInterval;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT
  );

  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue("");
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo

    dispatch(otpResend());
    dispatch(resendOTP(value))
      .then((response) => {
        dispatch(otpResendSuccess());
        // do something with the response
        console.log(response);
      })
      .catch((error) => {
        dispatch(otpResendFailure(error));
        Alert.alert("Something Went Wrong");
      });

    console.log("todo: Resend OTP");
  };

  useState(() => {
    if (success) {
      navigation.navigate("MODAL");
    }
  }, [success]);

  //declarations for input field
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const handleOTPVerification = (value) => {
    dispatch(otpRequest());
    dispatch(verifyOTP(value))
      .then((response) => {
        dispatch(otpSuccess());
        // do something with the response
        console.log(response);
      })
      .catch((error) => {
        Alert.alert("Something Went Wrong");
        dispatch(otpFailure(error));
      });
  };

  const [fontsLoaded] = useFonts({
    //  "VisbyExtra-Bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-extrabold.otf"),
    "VisbyExtra-Bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-extrabold.otf"),
    // "VisbyExtra-DemiBold": require("../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyExtra-DemiBold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyCF-bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 30 }}
      >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
          <Text
            style={{
              color: COLORS.black,
              fontSize: 25,
              fontWeight: "900",
              fontFamily: "VisbyExtra-Bold",
            }}
          >
            Enter The {"\n"}Verification Code
          </Text>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: 13,
              marginVertical: 10,
              fontFamily: "VisbyCF-bold",

              top: 2,
              // fontWeight: "bold",
            }}
          >
            Enter the verification code sent to your phone
          </Text>

          <View>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>

          <View style={styles.button}>
            <Button
              color={COLORS.FuddBackgroundColor}
              title="Verify"
              onPress={() => {
                handleOTPVerification(value);
              }}
            />
          </View>
          {/* View for resend otp  */}
          {resendButtonDisabledTime > 0 ? (
            <Text style={styles.resendCodeText}>
              Resend Code in {resendButtonDisabledTime} sec
            </Text>
          ) : (
            <TouchableOpacity onPress={onResendOtpButtonPress}>
              <View style={styles.resendCodeContainer}>
                <Text style={styles.resendCode}> Resend Code</Text>
                <Text style={{ marginTop: 40 }}>
                  {" "}
                  in {resendButtonDisabledTime} sec
                </Text>
              </View>
            </TouchableOpacity>
          )}
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
  title: {
    textAlign: "left",
    fontSize: 20,
    marginStart: 20,
    fontWeight: "bold",
  },
  subTitle: {
    textAlign: "left",
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
  },
  codeFieldRoot: {
    marginTop: 40,
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 28,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: COLORS.FuddBackgroundColor,
    borderBottomWidth: 2,
  },

  button: {
    marginTop: 100,
  },
  resendCode: {
    color: COLORS.codeRed,
    marginStart: 100,
    marginTop: 40,
    fontSize: 12,
  },
  resendCodeText: {
    marginStart: 100,
    marginTop: 40,
    color: COLORS.codeRed,
    fontSize: 12,
    fontStyle: "normal",
  },
  resendCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OtpScreen;
