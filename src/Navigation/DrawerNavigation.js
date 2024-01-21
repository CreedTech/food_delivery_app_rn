import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerMenuScreen } from "../screens";
import { MenuScreen } from "../screens";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerMenuScreen {...props} />}
      screenOptions={screenOptions}
    >
      <Drawer.Screen component={MenuScreen} name="MENU" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
