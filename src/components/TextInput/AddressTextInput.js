import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { EvilIcons } from "@expo/vector-icons";
import { LocationIcon } from "../Icon";

const AddressTextInput = ({
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
          <View style={style.location}>
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
  location: {
    height: 55,
    backgroundColor: COLORS.FuddBackgroundColor,
    flexDirection: "row",
    paddingHorizontal: 15,
    // borderWidth: 0.5,
    // borderEndRadius: 10,
    width: 50,
    left: 20,
    alignItems: "center",
    alignContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default AddressTextInput;
