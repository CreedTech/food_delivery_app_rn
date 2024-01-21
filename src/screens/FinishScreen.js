import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS } from "../utils";
import Lottie from "lottie-react-native";
import { Button } from "../components/Buttons";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

const { height, width } = Dimensions.get("window");

const FinishScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);

  const name = user?.firstName + " " + user?.lastName;
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const _goToStore = () => {
    navigation.navigate("MODAL");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Welcome</Text>
          <View style={styles.storecontainer}>
            <Text style={styles.storename}>{name}</Text>
          </View>
        </View>
        <View style={styles.imagecontaier}>
          <Lottie
            source={require("../assets/images/chef.json")}
            // autoPlay
            // loop
            style={styles.image}
            progress={animationProgress.current}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={_goToStore}
            color={COLORS.FuddBackgroundColor}
            title="Go to dashboard"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.white,
  },

  textcontainer: {
    marginTop: 50,
  },
  text: {
    color: COLORS.ecentTextColor,
    fontSize: 15,
  },
  storecontainer: {
    marginTop: 10,
  },
  storename: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: "600",
  },
  image: {
    width: width * 0.2,
    height: height * 0.5,
  },
  imagecontaier: {
    // alignContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 50,
    marginHorizontal: 20,
  },
});
export default FinishScreen;
