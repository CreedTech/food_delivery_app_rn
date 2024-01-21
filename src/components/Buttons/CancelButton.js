import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../utils";

const CancelButton = ({ onPress, children, title, color, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        height: 40,
        width: "40%",
        backgroundColor: COLORS.textInput,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.black,
          fontWeight: "bold",
          fontSize: 13,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CancelButton;
