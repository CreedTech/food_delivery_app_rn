import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useMemo, useRef, useCallback } from "react";
import { COLORS } from "../../utils";
import BottomSheet, {
  BottomSheetView,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { DefaultTextInput, SearchTextInput } from "../TextInput";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BottomSheetModal = () => {
  const ref = useRef(null);

  const navigation = useNavigation();

  const snapPoints = useMemo(() => ["25%", "40%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {}, []);

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      index={1}
    >
      <View style={styles.container}>
        <SearchTextInput
          iconName="search"
          placeholder="What is your pickup location"
          onChange={() => navigation.navigate("MAP")}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});

export default BottomSheetModal;
