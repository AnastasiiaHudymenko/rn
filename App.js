import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./Screen/LoginScreen";
import { Registration } from "./Screen/RegisterScreen";

export default function App() {
  const [iconLoaded] = useFonts({
    IcoMoon: require("./assets/iconMoon/icomoon.ttf"),
  });
  const [fontsLoaded] = useFonts({
    Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!iconLoaded) {
    return null;
  }
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Registration />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
