import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import MainNavigation from "./src/Navigation/MainNavigation";
import { MainNavigation, DrawerNavigation } from "./src/Navigation";
import { store, persistor } from "./src/Redux/store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { DragableBottomSheet } from "./src/components/BottomSheet";
// import * as Sentry from "sentry-expo";
import Toast from "react-native-toast-message";

// Sentry.init({
//   dsn: "https://c5d243db38014de895c541aac1ecc09c@o4504636114534400.ingest.sentry.io/4504636165783552",
//   enableInExpoDevelopment: true,
//   debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
// });

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigation />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
