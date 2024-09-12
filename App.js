import { View, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Component from "./components/02-styling-and-layout/challenge-styling-layout";

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
