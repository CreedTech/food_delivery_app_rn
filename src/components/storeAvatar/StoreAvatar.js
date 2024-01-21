import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../utils";
import { StoreIcon } from "../Icon";

const StoreAvatar = ({ height }) => {
  return (
    <View style={styles.store}>
      <StoreIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  store: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.fudappGrey,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StoreAvatar;
