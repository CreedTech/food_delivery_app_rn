import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../utils";
import { LoacationHeader } from "../components/Header";
import { MapSearchInput } from "../components/TextInput";
import { Button } from "../components/Buttons";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { useDispatch, useSelector } from "react-redux";

import {
  _setReceiverLatLon,
  _setSenderLatLon,
} from "../Redux/Slice/LocationSlice";

const MapLocationScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const senderLong = useSelector(
    (state) => state.location.senderLatLong?.longitude
  );
  const senderLat = useSelector(
    (state) => state.location.senderLatLong?.latitude
  );
  const receiverLong = useSelector(
    (state) => state.location.receiverLatLong?.longitude
  );
  const receiverLat = useSelector(
    (state) => state.location.receiverLatLong?.latitude
  );

  const _sender = (data, details = null) => {
    dispatch(
      _setSenderLatLon({
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        name: details.name,
      })
    );
  };

  const _reciever = (data, details = null) => {
    dispatch(
      _setReceiverLatLon({
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        name: details.name,
      })
    );
  };

  const _onPress = () => {
    navigation.navigate("DELIVERY", {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LoacationHeader title="Location" />
      <View style={styles.searchContainer}>
        <FontAwesome
          name="dot-circle-o"
          size={20}
          color={COLORS.green}
          style={{ position: "absolute", marginLeft: 15, marginTop: 35 }}
        />
        <MapSearchInput
          fetchDetails={true}
          placeholder=" Pickup Location"
          onPress={_sender}
          styles={{
            container: {
              flex: 1,
            },
            textInput: {
              backgroundColor: COLORS.textInput,
            },
            listView: {
              position: "absolute",
              top: 40,
              marginRight: 20,

              // height: "100%",
            },
            row: {
              backgroundColor: "#FFFFFF",
              height: 50,
              flexDirection: "column",
            },
            separator: {
              height: 0.5,
              backgroundColor: "#c8c7cc",
            },
            description: { color: "black" },
            loader: {
              flexDirection: "row",
              justifyContent: "flex-end",
              height: 20,
            },
          }}
        />
        <Ionicons
          name="ios-location-sharp"
          size={20}
          color={COLORS.FuddBackgroundColor}
          style={{ position: "absolute", bottom: 30, marginLeft: 15 }}
        />
        <MapSearchInput
          fetchDetails={true}
          placeholder="Delivery Location"
          onPress={_reciever}
          styles={{
            container: {
              flex: 1,
            },
            textInput: {
              backgroundColor: COLORS.textInput,
            },
            listView: {
              position: "absolute",
              top: 40,
              marginRight: 20,

              // height: "100%",
            },
            row: {
              backgroundColor: "#FFFFFF",
              height: 50,
              flexDirection: "column",
            },
            separator: {
              height: 0.5,
              backgroundColor: "#c8c7cc",
            },
            description: { color: "black" },
            loader: {
              flexDirection: "row",
              justifyContent: "flex-end",
              height: 20,
            },
          }}
        />
      </View>
      <View style={styles.buttoncontainer}>
        {/* <Text>{`Sender: ${senderLong}, ${senderLat} receiver: ${receiverLong} , ${receiverLat}`}</Text> */}
        <Button
          color={COLORS.FuddBackgroundColor}
          onPress={_onPress}
          title="Continue"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    // flexDirection: "row",
    // marginHorizontal: 40,
    marginTop: 20,
  },
  buttoncontainer: {
    marginHorizontal: 30,
    marginTop: 350,
  },
});

export default MapLocationScreen;
