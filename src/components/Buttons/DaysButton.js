import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../../utils";
import { EvilIcons } from "@expo/vector-icons";

const DaysButton = (
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  placeholder,
  ...props
) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View
      style={[
        style.inputContainer,
        {
          borderColor: error
            ? COLORS.red
            : isFocused
            ? COLORS.darkBlue
            : COLORS.light,
          alignItems: "center",
        },
      ]}
    >
      <TextInput
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        style={{ color: COLORS.black }}
        placeholder="Monday"
        {...props}
      />

      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 40,
    backgroundColor: COLORS.textInput,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "25%",
    marginRight: 10,
    marginTop: 10,
  },
});

export default DaysButton;
