import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../utils";
import { LoacationHeader } from "../components/Header";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ModalTextInput, NoteTextInput } from "../components/TextInput";
import {
  RequestButton,
  CancelButton,
  ContactModalButton,
} from "../components/Buttons";
import MainModal from "../components/Modals/MainModal";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
// import { requestRide } from "../Redux/Slice/LocationSlice";

import { requestRide } from "../utils/api/models";

const data = [
  {
    id: 1,
    type: "Pick From",
    name: "Lara Okelewa",
    phone: "080664166",
    address: "CMS Garage, Marina Road, Lagos, Nigeria",
    icon: "location-pin",
    iconColor: COLORS.red,
    description: "Lorem Ipsum",
  },
  {
    id: 2,
    type: "Deliver To",
    name: "Lara Okelewa",
    phone: "080664166",
    address: "CMS Garage, Marina Road, Lagos, Nigeria",
    icon: "my-location",
    iconColor: COLORS.green,
    description: "Lorem Ipsum",
  },
];

const ButtonData = [
  {
    id: 1,
    name: " + Add Note",
    color: "#FFE4E6",
    icon: "android-messages",
  },
  {
    id: 2,
    name: "Receive Cash for Me",
    color: "#D5FFE6",
    icon: "cash-multiple",
  },
];

const _renderItem = ({ item, inputs }) => {
  return (
    <TouchableOpacity style={styles.content}>
      <MaterialIcons
        name="location-pin"
        size={20}
        color={COLORS.red}
        style={{ position: "absolute", marginLeft: 5, marginTop: 35 }}
      />
      <View style={{ marginTop: 30, position: "absolute", marginLeft: 30 }}>
        <Text style={styles.text}>Pickup From</Text>
        <Text style={styles.name}>{inputs?.senderName}</Text>
        <Text style={styles.address}>{inputs?.senderAddress}</Text>
        <Text style={styles.phone}>{inputs?.senderPhone}</Text>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

const _deliveryItem = ({ item, inputs }) => <_renderItem item={inputs} />;

const _buttonItem = ({ item, onPress }) => {
  const [visible, setVisible] = useState(false);
  const [cashVisible, setCashVisible] = useState(false);

  const toggleModal = async () => {
    if (item.id === 2) {
      setVisible(true);
    } else if (item.id === 1) {
      setCashVisible(true);
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={toggleModal}
      style={[styles.buttonContainer, { backgroundColor: item.color }]}
    >
      <MaterialCommunityIcons name={item.icon} size={20} />
      <Text style={styles.buttontitle}>{item.name}</Text>
      <View style={styles.modalContainer}>
        <MainModal visible={visible}>
          <View>
            <Text style={{ color: COLORS.red, fontSize: 15 }}>
              How much do you want us to collect?
            </Text>
            <View style={{ marginVertical: 30 }}>
              <ModalTextInput placeholder="#" label="Amount" />
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginVertical: 30,
                  marginLeft: 100,
                }}
              >
                <CancelButton
                  onPress={() => setVisible(false)}
                  title="Cancel"
                />
                <ContactModalButton title="Save" />
              </View>
            </View>
          </View>
        </MainModal>
        <View style={styles.modalContainer}>
          <MainModal visible={cashVisible}>
            <View style={{ marginVertical: 40 }}>
              <Text style={{ color: "#475569", fontSize: 15 }}>Note</Text>
              <View>
                <NoteTextInput />
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    marginVertical: 30,
                    marginLeft: 100,
                  }}
                >
                  <CancelButton
                    onPress={() => setCashVisible(false)}
                    title="Cancel"
                  />
                  <ContactModalButton title="Save" />
                </View>
              </View>
            </View>
          </MainModal>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const RideRequestScreen = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);

  const { inputs } = route.params;

  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate("FINALIZE", { inputs });
  };

  const onErr = () => {
    Alert.alert("Error", "You cancelled the connection request", [
      { text: "OK", onPress: () => nav.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LoacationHeader title="Request Ride" />
      <View>
        <View style={styles.content}>
          <MaterialIcons
            name="location-pin"
            size={20}
            color={COLORS.red}
            style={{ position: "absolute", marginLeft: 5, marginTop: 35 }}
          />
          <View style={{ marginTop: 30, position: "absolute", marginLeft: 30 }}>
            <Text style={styles.text}>Pickup From</Text>
            <Text style={styles.name}>{inputs?.senderName}</Text>
            <Text style={styles.address}>{inputs?.senderAddress}</Text>
            <Text style={styles.phone}>{inputs?.senderPhone}</Text>
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.content}>
          <MaterialIcons
            name="my-location"
            size={20}
            color={COLORS.green}
            style={{ position: "absolute", marginLeft: 5, marginTop: 35 }}
          />
          <View style={{ marginTop: 30, position: "absolute", marginLeft: 30 }}>
            <Text style={styles.text}>Deliver To</Text>
            <Text style={styles.name}>{inputs?.recipientName}</Text>
            <Text style={styles.address}>{inputs?.recipientAddress}</Text>
            <Text style={styles.phone}>{inputs?.recipientPhone}</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 10 }}>
        <View>
          <Text style={styles.package}>Package Description</Text>
          <Text style={styles.packageDes}>{inputs?.packageDetails}</Text>
          <View style={styles.line2} />
        </View>
      </View>
      <View style={styles.notesection}>
        <FlatList
          data={ButtonData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <_buttonItem item={item} />}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.finalise}>
        <View style={{ marginHorizontal: 30, top: 20 }}>
          <RequestButton
            color={COLORS.FuddBackgroundColor}
            onPress={onPress}
            title="Request"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  divider: {
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  content: {
    marginHorizontal: 20,
    marginBottom: -30,
  },
  text: {
    fontSize: 13,
    color: COLORS.red,
    marginBottom: 3,
  },
  name: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 3,
  },
  address: {
    color: "#ABABB4",
    fontSize: 13,
    marginBottom: 3,
  },
  phone: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 3,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.black,
    alignSelf: "stretch",
    marginTop: 115,
    margin: 30,
  },
  line2: {
    height: 1,
    backgroundColor: COLORS.black,
    alignSelf: "stretch",
    marginTop: 50,
    margin: 20,
  },
  package: {
    marginLeft: 20,
    fontSize: 13,
  },
  packageDes: {
    marginTop: 10,
    marginLeft: 20,
    color: COLORS.grey,
  },
  buttonsection: {
    // height: 50,
    // marginTop: 10,
    // padding: 10,
    // flexDirection: "row",
  },
  notes: {
    color: "#881337",
    fontSize: 12,
  },
  notedetail: {
    fontSize: 12,
    marginTop: 5,
  },
  finalise: {
    // backgroundColor: COLORS.FuddBackgroundColor,
    // height: 250,
    // top: 60,
  },
  express: {
    borderRadius: 5,
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  amount: {
    top: 25,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // padding: 10,
    // borderRadius: 5,
    // height: 45,
    // width: "100%",

    height: 40,
    // width: "105%",
    marginVertical: 20,
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
  },
  buttontitle: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 11,
    // textAlign: "center",
    // left: 3,
    padding: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  notesection: {
    marginHorizontal: 40,
  },
  modalContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    // width: "100%",
    // height: 40,
    // alignItems: "flex-end",
    // justifyContent: "center",
    // marginHorizontal: 20,
  },

  searchContainer: {
    // flexDirection: "row",
    // marginHorizontal: 40,
    marginTop: 20,
  },
});

export default RideRequestScreen;
