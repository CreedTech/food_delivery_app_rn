import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "../../utils/api";

// console.log(GOOGLE_MAPS_APIKEY, "APIKEy");

const MapSearchInput = ({
  label,
  iconName,
  error,
  password,
  styles,
  onPress = () => {},
  onFocus = () => {},
  fetchDetails,
  predefinedPlaces,
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 45 }}>
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
          style={{ color: COLORS.black, fontSize: 22, marginRight: 10 }}
        />
        <GooglePlacesAutocomplete
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          // style={{ color: "#334155", flex: 1 }}
          {...props}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={styles}
          onPress={onPress}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          fetchDetails={fetchDetails}
          onFail={(error) => console.log(error, "ERRROR")}
          onNotFound={() => console.log("no results")}
          predefinedPlaces={predefinedPlaces}
          // currentLocation={true}
          // currentLocationLabel="Nsukka"
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: COLORS.darkBlue, fontSize: 22 }}
          />
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
    height: 50,
    backgroundColor: COLORS.textInput,
    flexDirection: "row",
    paddingHorizontal: 15,
    // borderWidth: 0.5,
    borderRadius: 10,
    borderColor: COLORS.textInput,
    // marginBottom: -20,
  },
});

export default MapSearchInput;
