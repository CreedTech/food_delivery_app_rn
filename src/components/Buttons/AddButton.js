import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { COLORS } from "../../utils";

const AddButton = ({ title, onPress = () => {}, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.inputContainer}
      testID="button"
    >
      <Text
        testID="text"
        style={{ color: COLORS.white, fontWeight: "bold", fontSize: 15 }}
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
  inputContainer: {
    height: 40,
    backgroundColor: COLORS.FuddBackgroundColor,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "17%",
    marginRight: 10,
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
  },
});

export default AddButton;
