import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { COLORS } from "../../utils";

const { width } = Dimensions.get("screen");

const LoacationHeader = ({ title }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable activeOpacity={0.9} onPress={onPress}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 25,
    flexDirection: "row",
  },
  textContainer: {
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    marginLeft: 80,
    textAlign: "center",
    color: COLORS.black,
    fontSize: 20,
    // fontFamily: "Helvetica",
    fontWeight: "bold",
  },
});
export default LoacationHeader;
