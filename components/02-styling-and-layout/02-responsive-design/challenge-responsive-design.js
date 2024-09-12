// ResponsiveDesignChallenge.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";

// Retrieve screen dimensions
const { width } = Dimensions.get("window");
const isLargeScreen = width > 600;

const ResponsiveDesignChallenge = () => {
  // Get window dimensions
  const { width, height } = useWindowDimensions();
  // Determine orientation
  const isPortrait = height > width;

  return (
    <View
      style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}
    >
      <Text style={isLargeScreen ? styles.largeText : styles.smallText}>
        {isPortrait ? "Portrait" : "Landscape"} - Screen Width: {width}, Screen
        Height: {height}
      </Text>
      <View style={isLargeScreen ? styles.largeBox : styles.smallBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 20,
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcoral",
    padding: 20,
  },
  largeText: {
    fontSize: 24,
    color: "darkblue",
  },
  smallText: {
    fontSize: 16,
    color: "darkred",
  },
  largeBox: {
    width: 200,
    height: 200,
    backgroundColor: "darkgreen",
    margin: 10,
  },
  smallBox: {
    width: 100,
    height: 100,
    backgroundColor: "darkorange",
    margin: 10,
  },
});

export default ResponsiveDesignChallenge;
