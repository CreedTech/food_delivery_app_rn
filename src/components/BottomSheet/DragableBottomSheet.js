import {
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { COLORS } from "../../utils";

const { width, height } = Dimensions.get("screen");

const DragableBottomSheet = (props) => {
  const [alignment] = useState(new Animated.Value(0));

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      useNativeDriver: true,
      toValue: 1,
      duration: 500,
    }).start();
  };

  const actionSheeetInterpolate = alignment.interpolate({
    inputeRange: [0, 1],
    outputRange: [-height / 2.4, 0],
  });

  const actionStyle = {
    transform: [
      {
        translateY: actionSheeetInterpolate,
      },
    ],
  };

  return (
    <Animated.View style={[styles.container, actionSheeetInterpolate]}>
      <Text>DragableBottomSheet</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    width: width / 1.04,
    marginHorizontal: 10,
  },
});

export default DragableBottomSheet;
