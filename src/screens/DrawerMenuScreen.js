import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { COLORS } from "../utils";
import { StoreAvatar } from "../components/storeAvatar";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { getBalance, setBalance } from "../Redux/Slice/walletSlice";
import { logoutUser } from "../Redux/Slice/_authSlice";
import { Alert } from "react-native-web";

const data = [
  {
    id: 1,
    title: "Deliveries",
  },
  {
    id: 2,
    title: "Wallet",
  },
  {
    id: 3,
    title: "About",
  },
  {
    id: 4,
    title: "Contact",
  },
  {
    id: 5,
    title: "Dispute",
  },
  {
    id: 6,
    title: "Terms and Conditions",
  },
];

const _renderItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.renderItem}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.drawerlist}>{item.title}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
    </TouchableOpacity>
  );
};

const DrawerMenuScreen = ({ onPress, ...props }) => {
  const { user } = useSelector((state) => state.auth);

  const [drawerData, setDrawerData] = useState(data);

  const userId = useSelector((state) => state.auth.user);

  const name = user?.firstName + " " + user?.lastName;

  const balance = useSelector((state) => state.wallet.balance);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBalance(userId));
  }, []);

  const logOut = async () => {
    try {
      dispatch(logoutUser());
      // navigation.navigate("SINGUP");
    } catch (error) {
      Alert.alert("Error trying to log out");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.drawer}>
        <View style={styles.avatar}>
          <StoreAvatar />
          <Text style={styles.storename}>{name}</Text>
          <Text onPress={onPress} style={styles.profile}>
            View Profile
          </Text>
        </View>
      </View>
      <View style={styles.baclancecontainer}>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.balance}>Wallet Balance</Text>
          <Text style={styles.balaceText}>₦{balance}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          listKey={(item, index) => `_key${index.toString()}`}
          data={drawerData}
          renderItem={({ item }) => <_renderItem item={item} />}
          contentContainerStyle={{ marginTop: 20 }}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.logoutcontainer}>
        <TouchableOpacity onPress={logOut}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <Text style={styles.privacy}>Privacy Policy</Text>
          <Text style={styles.delete}>Delete Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  drawer: {
    height: 230,
    backgroundColor: COLORS.FuddBackgroundColor,
  },
  avatar: {
    marginHorizontal: 20,
    marginTop: 80,
  },
  storename: {
    marginTop: 10,
    fontSize: 17,
    color: COLORS.white,
    fontWeight: "bold",
  },
  profile: {
    marginTop: 5,
    fontSize: 12,
    color: COLORS.white,
  },
  baclancecontainer: {
    height: 70,
    backgroundColor: COLORS.black,
  },
  balance: {
    fontSize: 12,
    color: COLORS.white,
    marginTop: 15,
  },
  balaceText: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "bold",
    marginTop: 10,
  },
  drawerlist: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "bold",
  },
  renderItem: {
    margin: 3,
    padding: 2,
  },
  logoutcontainer: {
    top: 150,
    height: 30,
    backgroundColor: COLORS.FuddBackgroundColor,
  },
  logout: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 4,
  },
  privacy: {
    fontSize: 13,
    textDecorationLine: "underline",
  },
  delete: {
    fontSize: 13,
    color: COLORS.FuddBackgroundColor,
    textDecorationLine: "underline",
  },
});

export default DrawerMenuScreen;
