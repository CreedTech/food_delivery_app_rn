import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS } from "../../utils";

const Button = ({ title, onPress = () => {}, color,phone, password }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      // disabled={!phone && !password}
      style={{
        height: 55,
        width: "100%",
        backgroundColor: color,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
      testID="button"
    >
      <Text
        testID="text"
        style={{ color: COLORS.white, fontWeight: "bold", fontSize: 18 }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.lendsqr,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Button;
