import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const DeviceOrientation = () => {
  // State to store current orientation
  const [orientation, setOrientation] = useState(
    Dimensions.get("screen").width > Dimensions.get("screen").height
      ? "Landscape"
      : "Portrait"
  );

  useEffect(() => {
    // Handler for orientation change
    const handleChange = ({ screen }) => {
      setOrientation(screen.width > screen.height ? "Landscape" : "Portrait");
    };

    // Add event listener for orientation changes
    const subscription = Dimensions.addEventListener("change", handleChange);

    // Cleanup the event listener on unmount
    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Displaying current device orientation */}
      <Text style={styles.text}>Current Orientation: {orientation}</Text>
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

export default DeviceOrientation;
