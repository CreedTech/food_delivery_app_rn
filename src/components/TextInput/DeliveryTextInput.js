import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../utils";

const DeliveryTextInput = (
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View
      style={{
        borderColor: error
          ? COLORS.red
          : isFocused
          ? COLORS.darkBlue
          : COLORS.light,
        alignItems: "center",
      }}
    >
      <TextInput
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        style={{ color: COLORS.black, flex: 1 }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionDescription: {
    fontSize: 12,
    height: 30,
    marginLeft: "5%",
    color: COLORS.textColor,
  },
});
export default DeliveryTextInput;
