import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Ionicons name="md-arrow-back-sharp" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default BackButton;
