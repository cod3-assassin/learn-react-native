import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexWrapExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Box 1</Text>
      <Text style={styles.box}>Box 2</Text>
      <Text style={styles.box}>Box 3</Text>
      <Text style={styles.box}>Box 4</Text>
      <Text style={styles.box}>Box 5</Text>
      <Text style={styles.box}>Box 6</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // Enable wrapping to new lines
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightyellow",
    padding: 10,
    margin: 5,
    width: 100, // Width helps demonstrate wrapping
  },
});

export default FlexWrapExample;
