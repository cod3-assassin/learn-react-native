import React from "react";
import { View, Button, Platform, Alert } from "react-native";

const PlatformSpecificCode = () => {
  // Function to show an alert with platform-specific message
  const showAlert = () => {
    Alert.alert(
      "Platform Specific Alert",
      `This is an alert on ${Platform.OS}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Platform-specific button title */}
      <Button
        title={Platform.OS === "ios" ? "iOS Button" : "Android Button"}
        onPress={showAlert}
      />
    </View>
  );
};

export default PlatformSpecificCode;
