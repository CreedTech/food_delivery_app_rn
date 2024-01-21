import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef,useState } from "react";
import { COLORS } from "../utils";
import Lottie from "lottie-react-native";
import { Button } from "../components/Buttons";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

const TrackOrder = ({ navigation }) => {
  const [data, setData] = useState("Pending");
  const animationProgress = useRef(new Animated.Value(0));

  // const getOrderStatus = async () => {
  //   const queryParams = await AsyncStorage.getItem("queryParams");
  //   console.log('====================================');
  //   console.log('====================================');
  //   console.log(queryParams);
  //   setData(queryParams?.status.toString())
  //   console.log(queryParams?.status.toString());
  //   console.log('====================================');
  //   console.log('====================================');
  // }
  // const { data } = route.params;
  // console.log("Data");
  // console.log(data);

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    // getOrderStatus();
  }, []);

  const _goToStore = () => {
    navigation.navigate("History");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginHorizontal: 20, marginTop: 50 }}>
        <View style={styles.imagecontaier}>
          <Lottie
            source={require("../assets/images/rider.json")}
            autoPlay
            loop
            style={styles.image}
            progress={animationProgress.current}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={styles.rider}>Rider Assigned</Text>
          <Text style={styles.deliver}>
            Your rider is on the way, you can track your {"\n"} order status on
            deliveries
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            color={COLORS.FuddBackgroundColor}
            onPress={_goToStore}
            title="Track Order"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.white,
  },

  textcontainer: {
    marginTop: 50,
  },
  text: {
    color: COLORS.ecentTextColor,
    fontSize: 15,
  },
  storecontainer: {
    marginTop: 10,
  },
  storename: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: "600",
  },
  image: {
    width: width * 0.2,
    height: height * 0.35,
  },
  imagecontaier: {
    // alignContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 120,
    marginHorizontal: 20,
  },
  rider: {
    fontSize: 20,
    fontWeight: "bold",
  },
  deliver: {
    fontSize: 12,
    marginTop: 10,
    color: COLORS.ecentTextColor,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    color: COLORS.ecentTextColor,
    marginTop: 10,
  },
});

export default TrackOrder;
