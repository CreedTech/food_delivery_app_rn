import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../utils";
import { LoacationHeader } from "../components/Header";
import Accordion from "../components/Accordion/Accordion";
import {
  Button,
  CancelButton,
  ContactModalButton,
} from "../components/Buttons";
import { Entypo } from "@expo/vector-icons";

import MainModal from "../components/Modals/MainModal";
import ModalTextInput from "../components/TextInput/ModalTextInput";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { amount } from "../Redux/Slice/LocationSlice";
import { requestRide } from "../utils/api/models";
import * as Contacts from "expo-contacts";

import axios from "axios";

const DeliveryDetailScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const [contacts, setContacts] = useState([]);

  const userId = useSelector((state) => state.auth.user?.userId);
  const senderPhone = useSelector((state) => state.auth.user?.phone);

  const { user } = useSelector((state) => state.auth);

  const senderName = user?.firstName + " " + user?.lastName;

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

  const senderLocationLatLng = `${senderLat}, ${senderLong}`;
  const recipientLocationLatLng = `${receiverLat}, ${receiverLong}`;

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const pickupTime = `${hours}:${minutes}`;

  const senderAddress = useSelector(
    (state) => state.location.senderLatLong?.name
  );

  const senderLandMark = senderAddress;

  const recipientAddress = useSelector(
    (state) => state.location.receiverLatLong?.name
  );

  const [inputs, setInputs] = useState({
    requestType: "EXPRESS",
    userId,
    senderAddress,
    senderLocationLatLng,
    recipientLocationLatLng,
    senderLandMark,
    senderName,
    senderPhone,
    recipientAddress,
    recipientLandMark: "",
    recipientName: "",
    recipientPhone: "",
    packageDetails: "",
    pickupTime,
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.recipientName) {
      handleError("Please input receiversName", "recipientName");
      isValid = false;
    }
    if (!inputs.recipientPhone) {
      handleError("Please input receiversphone", "recipientPhone");
      isValid = false;
    }
    if (!inputs.recipientLandMark) {
      handleError("Please input LandMark", "recipientLandMark");
      isValid = false;
    }
    if (!inputs.packageDetails) {
      handleError("Please input packageDetail", "packageDetails");
      isValid = false;
    }

    if (!inputs.recipientAddress) {
      handleError("Please input recepientAdrress", "recipientAddress");
      isValid = false;
    }
    if (isValid) {
      onPress();
    }
  };

  const onPress = () => {
    navigation.navigate("RIDE", { inputs });
    // dispatch(requestRide(inputs));
    console.log(inputs);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const toggleModal = () => {
    setVisible(true);
    onPressContac();
  };

  const _toggle = () => {
    console.log("HEllo");
  };

  const onPressContac = async () => {
    const status = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.PHONE_NUMBERS],
      });
      if (data.length > 0) {
        setContacts(data);
      }
    }
  };

  const title = (
    <View>
      <Text style={styles.sectionTitle}>Pickup Contact</Text>
    </View>
  );

  const ReceiverDetails = (
    <View>
      <Text style={styles.sectionTitle}>Receiver Details</Text>
    </View>
  );

  const ReceiverBody = (
    <View>
      <Text style={styles.sectionTitle}>Name</Text>
      <Text
        onPress={toggleModal}
        style={{
          marginLeft: 260,
          position: "absolute",
          color: COLORS.red,
          fontSize: 12,
        }}
      >
        Change
      </Text>
      <TextInput
        placeholder="Receivers Name"
        style={styles.sectionDescription}
        onChangeText={(text) => handleOnchange(text, "recipientName")}
        onFocus={() => handleError(null, "recipientName")}
      />
      <Text style={styles.sectionTitle}>Phone</Text>
      <TextInput
        placeholder="+234857366785"
        style={styles.sectionDescription}
        onChangeText={(text) => handleOnchange(text, "recipientPhone")}
        onFocus={() => handleError(null, "recipientPhone")}
      />
      <Text style={styles.sectionTitle}>Address</Text>
      <Text style={styles.sectionDescription}>{recipientAddress}</Text>
      <Text style={styles.sectionTitle}>LandMark</Text>
      <TextInput
        placeholder="Address"
        style={styles.sectionDescription}
        onChangeText={(text) => handleOnchange(text, "recipientLandMark")}
        onFocus={() => handleError(null, "recipientLandMark")}
      />
    </View>
  );

  const PackageDetails = (
    <View>
      <Text style={styles.sectionTitle}>Package Details</Text>
    </View>
  );
  const pickupBody = (
    <View>
      <Text style={styles.sectionTitle}>Name</Text>
      <Text
        onPress={toggleModal}
        style={{
          marginLeft: 260,
          position: "absolute",
          color: COLORS.red,
          fontSize: 12,
        }}
      >
        Change
      </Text>
      <Text style={styles.sectionDescription}>{senderName}</Text>

      <Text style={styles.sectionTitle}>Phone</Text>
      <Text style={styles.sectionDescription}>{senderPhone}</Text>
      <Text style={styles.sectionTitle}>Address</Text>
      <Text style={styles.sectionDescription}>{senderAddress}</Text>
    </View>
  );

  // const packagedetailsBody = (
  //   <View>
  //     <Text style={styles.sectionTitle}>Name</Text>
  //     <Text
  //       onPress={toggleModal}
  //       style={{
  //         marginLeft: 260,
  //         position: "absolute",
  //         color: COLORS.red,
  //         fontSize: 12,
  //       }}
  //     >
  //       Change
  //     </Text>
  //     <Text style={styles.sectionDescription}>Lanra Okelewa</Text>

  //     <Text style={styles.sectionTitle}>Phone</Text>
  //     <Text style={styles.sectionDescription}>+2348067987</Text>
  //   </View>
  // );

  const packagedetailsBody = (
    <View style={styles.packageDetails}>
      <TextInput
        placeholder="Package Delivery Details"
        style={styles.packageTextInput}
        multiline={true}
        onChangeText={(text) => handleOnchange(text, "packageDetails")}
        onFocus={() => handleError(null, "packageDetails")}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <StatusBar style="auto" />
        <LoacationHeader title="Delivery Details" />
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="25">
          <View style={styles.container}>
            <View style={styles.deliveryContainer}>
              <Accordion title={title}>{pickupBody}</Accordion>
            </View>

            <View style={styles.deliveryContainer}>
              <Accordion title={ReceiverDetails}>{ReceiverBody}</Accordion>
            </View>

            <View style={styles.deliveryContainer}>
              <Accordion title={PackageDetails}>{packagedetailsBody}</Accordion>
            </View>
          </View>
          <View style={styles.modalContainer}>
            <MainModal visible={visible}>
              {contacts.map((item) => {
                <View key={item.id}>
                  <View style={styles.header}>
                    <View>
                      <ModalTextInput placeholder="Search" iconName="search" />
                    </View>

                    <View style={{ marginVertical: 5 }}>
                      <Text style={{ color: "#94A3B8", fontSize: 12 }}>
                        Select from previously added contact
                      </Text>
                      <View style={{ marginVertical: 20 }}>
                        <Text style={{ color: COLORS.black, fontSize: 13 }}>
                          {item.name && item.PHONE_NUMBERS}
                        </Text>
                        <View style={styles.line} />
                      </View>
                    </View>
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
                      <ContactModalButton title="Add New" />
                    </View>
                  </View>
                </View>;
              })}
            </MainModal>
          </View>
          <View style={{ marginHorizontal: 25, top: 10 }}>
            <Button
              onPress={validate}
              color={COLORS.FuddBackgroundColor}
              title="Continue"
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  deliveryContainer: {
    borderColor: "#CBD5E1",
    borderRadius: 10,

    borderWidth: 2,

    padding: 6,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 15,
    height: 30,
    marginLeft: "5%",
    fontWeight: "bold",
  },
  sectionDescription: {
    fontSize: 12,
    height: 30,
    marginLeft: "5%",
    color: COLORS.textColor,
  },
  divider: {
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  line: {
    height: 0.5,
    backgroundColor: "#E2E8F0",
    alignSelf: "stretch",
    margin: 0,
    marginTop: 20,
  },

  packageDetails: {
    height: 80,
    color: COLORS.textColor,
    borderWidth: 1.5,
    borderColor: COLORS.fudappGrey,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  packageTextInput: {
    fontSize: 12,
    marginLeft: "5%",
    color: COLORS.textColor,
    marginTop: 10,
  },
});

export default DeliveryDetailScreen;
