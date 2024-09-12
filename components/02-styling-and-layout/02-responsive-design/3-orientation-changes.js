import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const OrientationChangeExample = () => {
  // Get window dimensions
  const { width, height } = useWindowDimensions();
  // Determine orientation
  const isPortrait = height > width;

  return (
    <View
      style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}
    >
      <Text style={styles.text}>{isPortrait ? "Portrait" : "Landscape"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightyellow",
  },
  text: {
    fontSize: 18,
  },
});

export default OrientationChangeExample;
