import React from "react";
import { View, StyleSheet } from "react-native";

const ViewBasics = () => {
  return (
    // Container for the views, with padding and background color.
    <View style={styles.container}>
      {/* First box */}
      <View style={styles.boxOne} />

      {/* Second box */}
      <View style={styles.boxTwo} />

      {/* Third box */}
      <View style={styles.boxThree} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10, // Adds some padding around the container
    flexDirection: "row", // Aligns the boxes in a row (horizontal)
    justifyContent: "space-between", // Adds space between the boxes
  },
  boxOne: {
    width: 50,
    height: 50,
    backgroundColor: "red", // Red box
  },
  boxTwo: {
    width: 50,
    height: 50,
    backgroundColor: "green", // Green box
  },
  boxThree: {
    width: 50,
    height: 50,
    backgroundColor: "blue", // Blue box
  },
});

export default ViewBasics;
