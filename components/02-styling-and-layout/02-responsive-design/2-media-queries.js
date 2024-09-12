import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

// Retrieve screen width
const { width } = Dimensions.get("window");

// Define screen size threshold for large screens
const isLargeScreen = width > 600;

const MediaQueriesExample = () => (
  <View style={isLargeScreen ? styles.largeContainer : styles.smallContainer}>
    <Text style={isLargeScreen ? styles.largeText : styles.smallText}>
      Responsive Text
    </Text>
  </View>
);

const styles = StyleSheet.create({
  largeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  smallContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcoral",
  },
  largeText: {
    fontSize: 24,
  },
  smallText: {
    fontSize: 16,
  },
});

export default MediaQueriesExample;
