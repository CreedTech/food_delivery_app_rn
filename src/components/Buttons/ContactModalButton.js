import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../utils";

const ContactModalButton = ({ onPress, children, title, color, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        height: 40,
        width: "40%",
        backgroundColor: COLORS.FuddBackgroundColor,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "bold",
          fontSize: 13,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ContactModalButton;
