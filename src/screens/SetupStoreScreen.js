import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { COLORS } from "../utils";
import { StoreIcon } from "../components/Icon";
import { AddButton, Button, DaysButton } from "../components/Buttons";
import {
  DefaultTextInput,
  StoreTextInput,
  AddressTextInput,
  TimeTextInput,
} from "../components/TextInput";
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { StoreAvatar } from "../components/storeAvatar";
import { StatusBar } from "expo-status-bar";

const SetupStoreScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    storename: "",
    storetype: "",
    storeaddress: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const [events, setEvents] = React.useState({
    days: "",
    starttime: "",
    endtime: "",
  });

  const validateEvent = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!events.days) {
      handleError("Please input store dasys", "days");
      isValid = false;
    }
    if (!events.starttime) {
      handleError("Please input start time", "start time");
      isValid = false;
    }
    if (!events.endtime) {
      handleError("Please input end time", "end time");
      isValid = false;
    }

    if (isValid) {
      add();
    }
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.storename) {
      handleError("Please input store name", "storename");
      isValid = false;
    }
    if (!inputs.storetype) {
      handleError("Please input store type", "storetype");
      isValid = false;
    }
    if (!inputs.storeaddress) {
      handleError("Please input store address", "storeaddress");
      isValid = false;
    }
    if (isValid) {
      setStore();
    }
  };

  const setStore = () => {
    navigation.navigate("FINISH");
  };

  const add = () => {
    navigation.push();
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={styles.storeContainer}
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
          <View>
            <Text style={styles.storetext}>Setup Store</Text>
            <View style={styles.store}>
              <StoreAvatar />
            </View>
            <View style={{ marginVertical: 20, marginTop: 25 }}>
              <StoreTextInput
                onChangeText={(text) => handleOnchange(text, "storename")}
                onFocus={() => handleError(null, "storename")}
                // iconName="email-outline"
                // label="Email"
                placeholder="store name"
                error={errors.storename}
              />
              <StoreTextInput
                onChangeText={(text) => handleOnchange(text, "storetype")}
                onFocus={() => handleError(null, "storetype")}
                // iconName="email-outline"
                // label="Email"
                placeholder="Store Type"
                error={errors.storetype}
              />
              <AddressTextInput
                onChangeText={(text) => handleOnchange(text, "storeaddress")}
                onFocus={() => handleError(null, "storeaddress")}
                // iconName="lock-outline"
                // label="Password"
                placeholder="Store Address"
                error={errors.storeaddress}
                password
              />
              <View style={styles.eventcontainer}>
                <View style={styles.eventtextCon}>
                  <Text style={styles.eventText}>Opening Hours</Text>
                </View>

                <View
                  style={{
                    // flexDirection: "row",

                    flexDirection: "row",
                  }}
                >
                  <DaysButton
                    onChangeText={(text) => handleOnchange(text, "days")}
                    onFocus={() => handleError(null, "days")}
                    placeholder="Monday"
                    error={errors.days}
                  />
                  <TimeTextInput
                    onChangeText={(text) => handleOnchange(text, "starttime")}
                    onFocus={() => handleError(null, "starttime")}
                    placeholder="7:30am"
                    error={errors.starttime}
                  />
                  <TimeTextInput
                    onChangeText={(text) => handleOnchange(text, "endtime")}
                    onFocus={() => handleError(null, "endtime")}
                    placeholder="Store Address"
                    error={errors.endtime}
                  />
                  <AddButton
                    onPress={validateEvent}
                    title="Add"
                    color={COLORS.FuddBackgroundColor}
                  />
                </View>
              </View>

              <View style={styles.dayscontainer}>
                <Text style={styles.selecteddays}>Selected days</Text>
                <Text style={styles.opening}>Opening Time</Text>
                <Text style={styles.closing}>Closing Time</Text>
              </View>
              <View style={styles.selectedtime}>
                <Text style={styles.daysText}>Monday</Text>
                <Text style={styles.opendaysText}>8:00am</Text>
                <Text style={styles.closedaysText}>8:00pm</Text>
                <FontAwesome5
                  style={{ marginLeft: 20 }}
                  name="trash"
                  size={13}
                  color={COLORS.MainColor}
                />
              </View>
              <View style={styles.button}>
                <Button
                  color={COLORS.FuddBackgroundColor}
                  title="Setup Store"
                  onPress={validate}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  storeContainer: {
    paddingTop: 50,
    paddingHorizontal: 17,
    paddingBottom: 80, // this is wronng
  },
  storetext: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: "800",
    fontFamily: "VisbyExtra-Bold",
  },
  store: {
    // marginTop: 20,
    // width: 80,
    // height: 80,
    // borderRadius: 40,
    // backgroundColor: COLORS.fudappGrey,
    // justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 230,
    marginLeft: 250,
  },
  eventcontainer: {},
  eventtextCon: {},
  eventText: {
    color: COLORS.textColor,
    fontSize: 15,
  },
  dayscontainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    // marginHorizontal: 20,
    marginLeft: 15,
  },
  selecteddays: {
    color: COLORS.textColor,
    fontSize: 11,
  },
  closing: {
    color: COLORS.textColor,
    fontSize: 11,
    marginLeft: 30,
  },
  opening: {
    color: COLORS.textColor,
    fontSize: 11,
    marginLeft: 15,
  },
  selectedtime: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    // marginHorizontal: 20,
    marginLeft: 20,
  },
  daysText: {
    color: COLORS.textColor,
    fontSize: 15,
    marginLeft: 9,
  },
  opendaysText: {
    color: COLORS.textColor,
    fontSize: 15,
    marginLeft: 20,
  },
  closedaysText: {
    color: COLORS.textColor,
    fontSize: 15,
    marginLeft: 50,
  },
  button: {
    bottom: -50,
    marginHorizontal: 25,
  },
});

export default SetupStoreScreen;
