import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../utils";

import { LoacationHeader } from "../components/Header";
import { SceneMap, TabView } from "react-native-tab-view";
import { StatusBar } from "expo-status-bar";

const data = [
  {
    id: 1,
    name: "Pending",
  },
  {
    id: 2,
    name: "Transit",
  },
  {
    id: 3,
    name: "Picked up",
  },
  {
    id: 4,
    name: "Delivered",
  },
  {
    id: 5,
    name: "Unpaid",
  },
  {
    id: 6,
    name: "Canceled",
  },
];

const _renderitem = ({ item }) => {
  const [selected, setSelected] = React.useState(false);
  const [tabData, setTabData] = useState(data);

  const onPress = () => {
    setSelected(item.id);

    let updatedState = data.map((isLikedItem) =>
      isLikedItem === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{ padding: 3, justifyContent: "space-between", marginLeft: 20 }}
    >
      <Text style={item.id === selected ? styles.selected : styles.unselected}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const DeliveryHistory = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabData, setTabData] = useState(data);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LoacationHeader title="Deliveries" />
      <View style={styles.tabContainer}>
        <FlatList
          data={tabData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <_renderitem item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.pending}>
        <View style={styles.innerContainer}>
          <Text style={styles.pendingtext}>
            13-03-23<Text style={styles.pendingtext}> 12:02PM</Text>
          </Text>

          <Text style={styles.pendingtext}>₦100</Text>
        </View>
        <View style={[styles.innerContainer, { marginVertical: 10 }]}>
          <Text style={styles.order}>
            Order ID: 577377
            <Text
              style={{
                backgroundColor: COLORS.yellow,
                fontSize: 10,
              }}
            >
              {" "}
              Pending
            </Text>
          </Text>
          <Text style={styles.order}>37KM</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "space-between",
  },

  selected: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.red,
  },
  redColor: {
    color: COLORS.red,
  },
  unselected: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.black,
  },
  pending: {
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 2,
    paddingVertical: 15,
    paddingHorizontal: 20,
    // width: "100%",
    marginVertical: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 20,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pendingtext: {
    fontSize: 12,
  },
  order: {
    color: "#525254",
    fontSize: 10,
  },
});

export default DeliveryHistory;
