import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

const PlatformDetection = () => {
  return (
    <View style={styles.container}>
      {/* Displaying platform-specific text */}
      <Text style={styles.text}>
        You are using {Platform.OS === "ios" ? "iOS" : "Android"}
      </Text>
      {/* Displaying platform version */}
      <Text style={styles.text}>
        The platform version is: {Platform.Version}
      </Text>
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
  },
});

export default PlatformDetection;
