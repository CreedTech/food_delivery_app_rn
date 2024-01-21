import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ item, color, navigation }) => {
  const onPress = () => {
    if (item.id === 1) {
      navigation.navigate("PICK");
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.card, { backgroundColor: item.color }]}
      onPress={onPress}
    >
      <View style={styles.titlecon}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Cards;
