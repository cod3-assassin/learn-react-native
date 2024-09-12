import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const AvoidingDeviceNotches = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header Area</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Content Area</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 20, // Padding to avoid notch area
    backgroundColor: "#6200ea",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default AvoidingDeviceNotches;
