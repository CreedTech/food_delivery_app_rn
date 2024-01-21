import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path, Rect, Defs, Pattern, Use, Image } from "react-native-svg";
import { COLORS } from "../../utils";
import { MaterialIcons } from "@expo/vector-icons";

const MenuIcon = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <MaterialIcons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default MenuIcon;
