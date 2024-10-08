import { View, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Component from "./components/03-navigation/03-drawer-navigation/challenge-drawer-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <Component />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f0f0f0",
  },
});
