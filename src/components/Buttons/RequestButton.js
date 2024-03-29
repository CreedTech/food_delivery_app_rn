import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS } from "../../utils";

const RequestButton = ({ title, onPress = () => {}, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        height: 45,
        width: "95%",
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
        style={{
          color: COLORS.white,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default RequestButton;
