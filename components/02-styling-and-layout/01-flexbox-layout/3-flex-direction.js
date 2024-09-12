import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexDirectionExample = () => {
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
    flex: 1,
    flexDirection: "column", // Change to 'row', 'row-reverse', or 'column-reverse'
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightcoral",
    padding: 10,
  },
});

export default FlexDirectionExample;
