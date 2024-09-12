import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexboxIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Box 1</Text>
      <Text style={styles.box}>Box 2</Text>
      <Text style={styles.box}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full screen
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-around", // Distribute space between items
    alignItems: "center", // Center items vertically
  },
  box: {
    backgroundColor: "lightblue",
    padding: 10,
  },
});

export default FlexboxIntro;
