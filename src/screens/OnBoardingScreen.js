import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { useCallback } from "react";
import { COLORS } from "../utils";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DefaultButton from "../components/Buttons/DefaultButton";
import { StatusBar } from "expo-status-bar";

const { height, width } = Dimensions.get("window");

const OnBoardingScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "VisbyExtra-Bold": require("../assets/Demo_Fonts/Fontspring-DEMO-visbycf-extrabold.otf"),
    "VisbyExtra-DemiBold": require("../assets/Demo_Fonts/Fontspring-DEMO-visbycf-demibold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const _goToRegister = () => {
    navigation.navigate("REGISTER");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageCon}>
        <Image
          source={require("../assets/images/eats.jpg")}
          styles={styles.image}
          // source={require("../assets/images/uber.jpg")}
        />
      </View>
      <View style={styles.nxt}>
        <View style={styles.textCon}>
          <Text style={styles.text}>Instant Pickup</Text>
          <Text style={styles.text}>Instant Deliveries</Text>
        </View>
        <View style={styles.textCon}>
          <Text style={styles.Smalltext}>Satisfy your customers</Text>
          <Text style={[styles.Smalltext, { marginVertical: 5 }]}>
            Get access to fleet of Riders
          </Text>
        </View>
        {/* <View style={styles.txtCon}>
          <Text style={styles.txt}>Get access to fleet of Riders</Text>
        </View> */}
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <DefaultButton
            onPress={() => {
              navigation.navigate("SIGNUP");
            }}
            color={COLORS.white}
            title="Get Started"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    // resizeMode: "contain",
    width: "50%",
    height: "50%",
    // resizeMode: "cover",
    // alignItems: "center",
  },
  imageCon: {
    bottom: 50,
    height: 50,
    alignContent: "center",
  },
  nxt: {
    backgroundColor: COLORS.FuddBackgroundColor,
    height: height * 0.5,
    marginTop: 420,
  },
  textCon: {
    marginHorizontal: 40,
    alignContent: "center",
    marginTop: 30,
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "800",
    fontFamily: "VisbyExtra-Bold",
  },
  InstCon: {
    marginHorizontal: 20,
    // marginLeft: 60,
    // marginTop: 4,
  },
  Smalltext: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: "VisbyExtra-DemiBold",
    fontWeight: "600",
  },
  txt: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: "VisbyExtra-DemiBold",
    fontWeight: "600",
    marginLeft: 20,
  },
  txtCon: {
    // marginHorizontal: 20,
    // left: 60,
    // marginVertical: 4,
    alignContent: "center",
    alignItems: "center",
  },

  textIn: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "800",
    fontFamily: "VisbyExtra-Bold",
    marginLeft: 60,
  },
});

export default OnBoardingScreen;
