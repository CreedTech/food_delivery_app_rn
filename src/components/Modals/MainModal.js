import { View, StyleSheet, Modal, Animated } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { COLORS } from "../../utils";

const MainModal = ({ children, visible, onRequestClose }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  // const onDismiss = () => {
  //   setShowModal(!showModal);
  // };
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent onRequestClose={onRequestClose} visible={showModal}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.modalCon, { transform: [{ scale: scaleValue }] }]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.modalbackgroundColor,
  },

  modalCon: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    width: "90%",
    // height: "60%",
  },
});

export default MainModal;
