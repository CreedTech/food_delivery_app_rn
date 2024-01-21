import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { COLORS } from "../../utils";
import navSlice from "../../Redux/Slice/navSlice";
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
  setTravelTimeInformation,
} from "../../Redux/Slice/navSlice";
import { BackButton } from "../Buttons";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import BackButtonIcon from "../Icon/BackButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { LoacationHeader } from "../Header";
import tw from "tailwind-react-native-classnames";

const GOOGLE_MAPS_APIKEY = "AIzaSyCX8omWVJFMCISGt5lBdL5B7FubQ20HPq0";

const Maps = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  // useEffect(() => {
  //   if (!origin || !destination) return;

  //   const getTravelTime = async () => {
  //     fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
  //           units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
  //       });
  //   };
  //   getTravelTime();
  // }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  const mapRef = useRef(null);

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.constainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin ? origin.location.lat : 6.6143564,
          longitude: origin ? origin.location.lng : 3.355944,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        mapType="standard"
        zoomEnabled={false}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            // apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            // key={(index, origin) => index}
          ></Marker>
        )}

        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          ></Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  constainer: {
    // flex: 1,
    // backgroundColor: COLORS.white,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  button: {
    marginTop: 60,
    // // marginRight: 30,
    // // marginTop: 20,
    marginLeft: 10,
    // margin: 30,
    // marginBottom: 30,

    backgroundColor: COLORS.white,
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Maps;
