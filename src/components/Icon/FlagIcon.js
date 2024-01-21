import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect, Defs, Pattern, Use, Image } from "react-native-svg";
import { COLORS } from "../../utils";

const FlagIcon = (props) => {
  let width = props?.width || 20;
  let height = props?.height || 20;
  let color = props?.color || COLORS.black;
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Rect width="32" height="32" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_18_66" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_18_66"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export default FlagIcon;
