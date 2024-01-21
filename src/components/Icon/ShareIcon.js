import { View, Text } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";

const ShareIcon = ({ props }) => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V9"
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default ShareIcon;
