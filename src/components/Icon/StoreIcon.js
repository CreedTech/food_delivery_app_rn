import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect, Defs, Pattern, Use, Image } from "react-native-svg";
import { COLORS } from "../../utils";

const StoreIcon = (props) => {
  let width = props?.width || 20;
  let height = props?.height || 20;
  let color = props?.color || COLORS.black;
  return (
    <Svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.2199 20.3154L19.4274 21.3527V40L35.5685 30.6805V12.0332L21.2199 20.3154Z"
        fill="#FD264F"
      />
      <Path
        d="M24.1411 3.59336L17.9336 0L1.34444 9.57676L7.5602 13.1701L24.1411 3.59336Z"
        fill="#FD264F"
      />
      <Path
        d="M34.5146 9.57676L27.361 5.50208L10.7801 15.0788L11.7262 15.5685L17.9337 19.1535L24.1079 15.5934L34.5146 9.57676Z"
        fill="#FD264F"
      />
      <Path
        d="M9.52701 21.9336L6.55606 20.4066V15.6597L0.43158 12.1328V30.6473L16.4565 39.9004V21.3859L9.52701 17.3942V21.9336Z"
        fill="#FD264F"
      />
    </Svg>
  );
};

export default StoreIcon;
