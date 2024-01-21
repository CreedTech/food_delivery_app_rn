import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity
} from "react-native";
import { COLORS } from "../../utils";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/Buttons";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slice/_authSlice";
import FlashMessage from 'react-native-flash-message';
import { showMessage } from 'react-native-flash-message';
import * as Animatable from 'react-native-animatable';
import PhoneInput from 'react-native-phone-input';
import Feather from 'react-native-vector-icons/Feather';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SignUpScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    password: "",
    phone: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
const [errorLogin, setErrorLogin] = useState(null);
  // const [isFocused, setIsFocused] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);

  const { loading, error, user, loggedIn, success, status } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    // if (!inputs.email) {
    //   handleError("Please input email", "email");
    //   isValid = false;
    // }

    // if (!inputs.phone) {
    //   handleError("Please input phone number", "phone");
    //   isValid = false;
    // }

    // if (!inputs.password) {
    //   handleError("Please input password", "password");
    //   isValid = false;
    // }
    if (isValid) {
      login();
    }
  };
  const textInputChange = (val) => {
    if (val.trim().length >= 10 && !isNaN(+val)) {
      setInputs({
        ...inputs,
        phone: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setInputs({
        ...inputs,
        phone: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setInputs({
        ...inputs,
        password: val,
        isValidPassword: true,
      });
    } else {
      setInputs({
        ...inputs,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setInputs({
      ...inputs,
      secureTextEntry: !inputs.secureTextEntry,
    });
  };



  const login = async () => {
    Keyboard.dismiss();
    const userLogin = {
      phone: '+234' + inputs.phone.replace(' ', '').slice(-10),
      password: inputs.password,
      userType: 'VENDOR',
    };
    dispatch(loginUser(userLogin));
    // if (loginUser['type'] === 'danger') {
    //   console.log('y2');
    //   console.log(loginUser['message']);
    //   showMessage({
    //     message: loginUser['message'],
    //     type: 'danger',
    //     position: 'bottom',
    //   });
    // } else {
    //   console.log(loginUser['message']);
    //   showMessage({
    //     message: loginUser['message'],
    //     type: 'success',
    //     position: 'bottom',
    //   });
    // }

    // console.log("loginUser['message']");
    // console.log(loginUser['message']);
    // showMessage({
    //   message: loginUser['message'],
    //   type: 'danger',
    //   position: 'bottom',
    // });
    console.log("I JUST LOGGED TO FUDAPP ");
  };

  useEffect(() => {
    if (success) {
      navigation.navigate("FINISH");
    }
    if (error) {
      showMessage({
        message: error.message,
        type: 'danger',
        position: 'bottom',
      });
    }
  }, [success,error]);




  const [fontsLoaded] = useFonts({
    "VisbyExtra-Bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-extrabold.otf"),
    // "VisbyExtra-DemiBold": require("../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyExtra-DemiBold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
    "VisbyCF-bold": require("../../assets/Demo_Fonts/Fontspring-DEMO-visbycf-bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }



  

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar style="auto" />
      <Loader title="Wait for few seconds" visible={loading} />

      <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
        <TouchableOpacity>
          <Feather
            name="chevron-left"
            color="black"
            size={20}
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Please provide details below to login
          </Text>
        </View>

        <View style={{ marginVertical: 20, marginTop: 50 }}>
          <View style={styles.mobileContainer}>
            <PhoneInput
              allowZeroAfterCountryCode={true}
              style={styles.countrCode}
              initialCountry={'ng'}
              useRef="phone"
            />
            <TextInput
              style={styles.textInputMobile}
              value={inputs.phone}
              placeholder="Phone Number"
              keyboardType="numeric"
              maxLength={20}
              underlineColorAndroid="transparent"
              selectionColor="#FD264F"
              onChangeText={(val) => textInputChange(val)}
            />
            {inputs.check_textInputChange ? (
              <Animatable.View
                animation="bounceIn"
                style={{
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {inputs.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Invalid Phone Number</Text>
            </Animatable.View>
          )}
          <View style={styles.mobileContainer}>
            <TextInput
              secureTextEntry={inputs.secureTextEntry ? true : false}
              style={styles.passwordInput}
              placeholder="Password"
              value={inputs.password}
              placeholderStyle={{ fontSize: 40, color: 'red' }}
              autoCapitalize="none"
              selectionColor="#FD264F"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              {inputs.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={25} />
              ) : (
                <Feather name="eye" color="grey" size={25} />
              )}
            </TouchableOpacity>
          </View>
          {inputs.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be more than or equal to 6 characters long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.forgotPass}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPasswordScreen');
              }}
            >
              <Text style={styles.passwordForgotten}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
            <TouchableOpacity
              style={styles.LoginButton}
              onPress={login}
              disabled={!inputs.phone && !inputs.password}
            >
              <Text style={styles.loginText}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.noAccount}>
            <Text style={styles.noAccountText}>
              Don’t have an account?{' '}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('REGISTER');
                }}
              >
                <Text style={{ fontWeight: '600', color: '#FD264F' }}>
                  Register
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
      <FlashMessage position={'top'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '20%',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  backIcon: {
    marginBottom: 67,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#303030',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ABABB4',
  },
  textInputMobile: {
    alignSelf: 'stretch',
    width: '65%',
    paddingHorizontal: 11,
    paddingVertical: 10,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  countrCode: {
    width: '30%',
  },
  passwordInput: {
    alignSelf: 'stretch',
    paddingHorizontal: 11,
    paddingVertical: 10,
    width: '95%',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  LoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD264F',
    width: '100%',
    height: 56,
    marginTop: 30,
    borderRadius: 8,
  },
  forgotPass: {
    paddingTop: 14,
    alignSelf: 'flex-end',
  },
  passwordForgotten: {
    color: '#FD264F',
    fontSize: 14,
    fontWeight: '600',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
  },
  loginContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  noAccount: {
    paddingTop: 14,
    alignSelf: 'center',
  },
  noAccountText: {
    color: '#FD264F',
    fontSize: 16,
  },
  eyeIcon: {
    marginTop: 5,
  },
  mobileContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 27,
    paddingVertical: 7,
    marginTop: 40,
    backgroundColor: '#F2F2F4',
    borderRadius: 15,
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 17,
    color: 'grey',
  },
  errorMsg: {
    color: 'red',
  },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   errorMsg: {
//     color: 'red',
//     fontSize:'12'
//   },
//   inputContainer: {
//     width: '100%',
//     height: 55,
//     backgroundColor: COLORS.textInput,
//     flexDirection: "row",
//     paddingHorizontal: 27,
//     borderWidth: 0.5,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   countrCode: {
//     width: '10%',
//   },
//   textInputMobile: {
//     alignSelf: 'stretch',
//     // width: '100%',
//     paddingHorizontal: 11,
//     paddingVertical: 10,
//     color: '#000000',
//     backgroundColor: 'transparent',
//   },
//   passwordInput: {
//     alignSelf: 'stretch',
//     paddingHorizontal: 11,
//     paddingVertical: 10,
//     // width: '95%',
//     color: '#000000',
//     backgroundColor: 'transparent',
//   },
// });

export default SignUpScreen;
