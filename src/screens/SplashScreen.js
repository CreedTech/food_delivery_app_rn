import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../utils";
import { FudapIcon } from "../components/Icon";
import { StatusBar } from "expo-status-bar";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("ONBOARDING");
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FudapIcon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MainColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.white,
    fontFamily: "Helvetica",
    fontSize: 40,
    fontWeight: "bold",
  },
  textCon: {
    backgroundColor: COLORS.splashtext,
    width: 200,
    heigh: 40,
    alignItems: "center",
    borderRadius: 20,
    padding: 2,
  },
});

export default SplashScreen;
