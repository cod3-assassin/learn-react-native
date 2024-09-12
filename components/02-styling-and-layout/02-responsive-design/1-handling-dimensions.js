import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

// Retrieve screen dimensions
const { width, height } = Dimensions.get("window");

const HandlingDimensionsExample = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen Width: {width}</Text>
    <Text style={styles.text}>Screen Height: {height}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
  },
});

export default HandlingDimensionsExample;
