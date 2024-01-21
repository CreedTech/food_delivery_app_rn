import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import React, { useState, useEffect } from "react";
import { COLORS } from "../utils";
import { StoreAvatar } from "../components/storeAvatar";
import { MenuIcon } from "../components/Icon";
import { data } from "../utils/data";
import { Cards } from "../components/Cards";
import { StatusBar } from "expo-status-bar";
import { getUserById } from "../Redux/Slice/_authSlice";
import { fetchUserAndId, fetchUserData } from "../Redux/Slice/userAction";

import { useSelector, useDispatch } from "react-redux";

const deliverydata = [
  {
    id: 1,
    status: "in progress",
    address: "26 Okotie samson close...",
    date: "13 Nov",
    time: "13:06",
    color: COLORS.inprogreescolor,
    price: "₦700",
  },
  {
    id: 2,
    status: "Delivered",
    address: "26 Okotie samson close...",
    date: "13 Nov",
    time: "13:06",
    color: COLORS.deliveredColor,
    price: "₦600",
  },
];

const _renderItem = ({ item, color }) => {
  return (
    <>
      <View style={styles.deliverycon}>
        <View style={styles.circle} />
        <Text numberOfLines={0.2} ellipsizeMode="tail" style={styles.address}>
          {item.address}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.date}>
          {item.date} {""}
          <Text style={styles.time}>{item.time}</Text>
        </Text>
        <Text style={[styles.progress, { color: item.color }]}>
          {item.status}
        </Text>
      </View>
    </>
  );
};

const MenuScreen = ({ navigation, inputs }) => {
  const [ride, setRide] = useState(data);
  const [history, setHistory] = useState(deliverydata);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const userId = user?.userId;

  const _goToModal = async () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={COLORS.white} /> */}
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ marginTop: 20 }}>
        <View style={styles.icon}>
          <MenuIcon onPress={_goToModal} />
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Welcome</Text>
            <View style={styles.storecontainer}>
              <Text style={styles.storename}>{user?.firstName}</Text>
            </View>
          </View>
          <View style={styles.avatarcontainer}>
            <StoreAvatar />
          </View>
          <View style={styles.ridetextcon}>
            <Text style={styles.ridetext}>Request a delivery rider</Text>
          </View>
          <View>
            <FlatList
              data={ride}
              renderItem={({ item }) => (
                <Cards item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={2} // Set the number of columns here
              scrollEnabled={false}
            />
          </View>
          <View style={styles.ridetextcon}>
            <Text style={styles.ridetext}>Recent Deliveries</Text>
            <FlatList
              data={history}
              renderItem={_renderItem}
              keyExtractor={(item) => item.id}
              listKey={(item, index) => `_key${index.toString()}`}
              // keyExtractor={(item, index) => `_key${index.toString()}`}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: '10%',
  },
  avatarcontainer: {
    // marginHorizontal: 230,
    bottom: 60,
    marginLeft: 250,
  },
  textcontainer: {
    marginTop: 20,
    // marginLeft: 20,
  },
  text: {
    color: COLORS.black,
    fontSize: 16,
  },
  storecontainer: {
    marginTop: 10,
  },
  storename: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: "600",
  },
  icon: {
    marginLeft: 15,
  },
  ridetextcon: {
    marginTop: 30,
  },
  ridetext: {
    fontSize: 15,
    fontWeight: "bold",
  },
  //
  card: {
    marginVertical: 10,
    height: 160,
    width: 160,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 120,
    marginLeft: 20,
    alignContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  titlecon: {},
  circle: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: COLORS.recentColor,
  },
  deliverycon: {
    flexDirection: "row",
    marginTop: 13,
  },
  address: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
    textAlign: "center",
    // margin: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 5,
  },
  date: {
    marginLeft: 55,
    bottom: 15,
    fontSize: 13,
  },
  progress: {
    marginLeft: 120,
    bottom: 15,
    fontSize: 13,
    // color: COLORS.inprogreescolor,
  },
  time: {
    marginLeft: 55,
    bottom: 15,
    fontSize: 13,
  },
});

export default MenuScreen;
