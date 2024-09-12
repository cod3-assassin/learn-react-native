import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AligningItems = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.box}>Box 1 </Text>
      <Text style={styles.box}>Box 2 </Text>
      <Text style={styles.box}>Box 3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "column", //Items arrange vertically
    justifyContent: "center", //Align items on main axis (vertical here)
    alignItems: "flex-start", //Align items to start of cross axis (horizonatl here)
  },
  box: {
    backgroundColor: "lightgreen",
    margin: 10,
    padding: 30,
  },
});

export default AligningItems;
