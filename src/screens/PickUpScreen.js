import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../utils";
import tw from "tailwind-react-native-classnames";

import { Maps } from "../components/Maps";
import { BottomSheetModal } from "../components/BottomSheet";

const _renderItem = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const PickUpScreen = () => {
  return (
    <View style={styles.container}>
      <Maps />
      <BottomSheetModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // ...StyleSheet.absoluteFillObject,
  },
});
export default PickUpScreen;
