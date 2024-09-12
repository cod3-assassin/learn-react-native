import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Platform,
  Alert,
} from "react-native";

const ChallengePlatFormApi = () => {
  const [orientation, setOrientation] = useState(
    Dimensions.get("screen").width > Dimensions.get("screen").height
      ? "Landscape"
      : "Portrait"
  );

  useEffect(() => {
    const handleChange = ({ screen }) => {
      setOrientation(screen.width > screen.height ? "Landscape" : "Portrait");
    };

    const subscription = Dimensions.addEventListener("change", handleChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  const handleButtonClick = () => {
    Alert.alert(
      "Platform Information",
      Platform.OS === "ios" ? "You are on iOS" : "You are on Android"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Text of {Platform.OS}</Text>
      <Button
        title={Platform.OS === "ios" ? "iOS Button" : "Android Button"}
        onPress={handleButtonClick}
      />
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
    marginBottom: 10,
  },
});

export default ChallengePlatFormApi;
