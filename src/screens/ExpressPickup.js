import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../components/Header";
import { COLORS } from "../utils";
// import { ScrollView } from "react-native-virtualized-view";
import { DefaultTextInput } from "../components/TextInput";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const ExpressPickup = ({ navigation }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    pickfrom: "",
    destination: "",
    phone: "",
    name: "",
  });

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    // if (!inputs.email) {
    //   handleError("Please input email", "email");
    //   isValid = false;
    // }
    if (!inputs.pickfrom) {
      handleError("Please input pickfrom", "pickfrom");
      isValid = false;
    }
    if (!inputs.destination) {
      handleError("Please input destination", "destination");
      isValid = false;
    }
    if (!inputs.name) {
      handleError("Please input resturant", "resturant");
      isValid = false;
    }
    if (!inputs.phone) {
      handleError("Please input phone", "phone");
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };

  const login = () => {
    navigation.navigate("DELIVERY");
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
      <Header navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 25 }}
      >
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="25">
          <View style={styles.exprescon}>
            <Text style={styles.express}>Express</Text>
            <Text style={styles.pickup}>Pickup Details</Text>
            <View style={{ marginTop: 50 }}>
              <DefaultTextInput
                label="Pick from"
                placeholder="26 okotie samson street"
                onChangeText={(text) => handleOnchange(text, "pickfrom")}
                onFocus={() => handleError(null, "pickfrom")}
                error={errors.pickfrom}
              />
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Entypo name="location" size={13} color="black" />
                <Text style={styles.address}>Recent address</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={20}
                  color="black"
                  style={styles.arrow}
                />
              </View>
              <View>
                <DefaultTextInput
                  placeholder="Nearest Landmark Optional"
                  onChangeText={(text) => handleOnchange(text, "destination")}
                  onFocus={() => handleError(null, "destination")}
                  error={errors.destination}
                  iconName="source-commit-start-next-local"
                />
              </View>
              <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                <DefaultTextInput
                  label="Who to Pick from"
                  iconName="account-outline"
                  placeholder="Lara Okelewa"
                  onChangeText={(text) => handleOnchange(text, "name")}
                  onFocus={() => handleError(null, "name")}
                  error={errors.name}
                />
              </View>
              <View style={{ marginHorizontal: 25 }}>
                <DefaultTextInput
                  label="Phone Number"
                  iconName="phone-outline"
                  placeholder="0807789839"
                  onChangeText={(text) => handleOnchange(text, "phone")}
                  onFocus={() => handleError(null, "phone")}
                  error={errors.phone}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={validate}
                style={styles.arrowcon}
              >
                <AntDesign name="arrowright" size={20} color="white" />
              </TouchableOpacity>
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
  exprescon: {
    marginTop: 50,
  },
  express: {
    fontSize: 25,
    fontWeight: "bold",
  },
  pickup: {
    fontSize: 13,
    color: COLORS.expressgrey,
    marginTop: 5,
  },
  address: {
    marginLeft: 20,
    fontSize: 12,
  },
  arrow: {
    marginLeft: 180,
    marginBottom: 12,
  },
  arrowcon: {
    backgroundColor: "#320A11",
    // height: 45,
    // width: 45,
    borderRadius: 50,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginLeft: 260,
    marginTop: 20,
  },
});

export default ExpressPickup;
