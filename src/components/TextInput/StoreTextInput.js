import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { EvilIcons } from "@expo/vector-icons";
import { LocationIcon } from "../Icon";

const StoreTextInput = ({
  label,
  iconName,
  error,
  password,

  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View testID="textInput" style={{ marginBottom: 5, top: -20 }}>
      <Text style={style.label}>{label}</Text>
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
        <Icon
          name={iconName}
          style={{ color: COLORS.darkBlue, fontSize: 22, marginRight: 10 }}
        />

        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          // secureTextEntry={hidePassword}
          style={{ color: COLORS.black, flex: 1 }}
          {...props}
        />
        {password && (
          <View
            style={{
              width: 30,
              height: 40,
              backgroundColor: COLORS.FuddBackgroundColor,
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <LocationIcon />
          </View>
        )}
      </View>
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
    height: 55,
    backgroundColor: COLORS.textInput,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 10,
  },
});

export default StoreTextInput;
