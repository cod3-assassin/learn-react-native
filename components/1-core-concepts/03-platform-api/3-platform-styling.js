import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const PlatformStyles = () => {
  return (
    <View style={styles.container}>
      {/* Text with platform-specific styling */}
      <Text style={styles.text}>This text has platform-specific styling</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    // Platform-specific text color
    color: Platform.OS === "ios" ? "blue" : "green",
    // Platform-specific font family
    fontFamily: Platform.OS === "ios" ? "Arial" : "Roboto",
  },
});

export default PlatformStyles;
