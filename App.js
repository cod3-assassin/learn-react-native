import { View, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Component from "./components/1-core-concepts/03-platform-api/challenge-platform-api";

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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
