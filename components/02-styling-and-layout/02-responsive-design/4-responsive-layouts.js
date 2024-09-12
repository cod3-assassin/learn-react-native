import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const ResponsiveLayoutExample = () => {
  // Get window dimensions
  const { width, height } = useWindowDimensions();
  // Determine orientation
  const isPortrait = height > width;

  return (
    <View
      style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}
    >
      <Text style={styles.text}>Responsive Layout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcoral",
  },
  text: {
    fontSize: 18,
  },
});

export default ResponsiveLayoutExample;
