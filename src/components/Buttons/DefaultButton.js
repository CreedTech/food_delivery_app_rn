import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../utils";

const DefaultButton = ({ onPress, children, title, color, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        height: 55,
        width: "65%",
        backgroundColor: color,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          color: "COLORS.black",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
