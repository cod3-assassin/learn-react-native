import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const FlexboxChallenge = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Flexbox Layout Challenge</Text>
      </View>

      {/* Content Section with 2 Columns */}
      <View style={styles.content}>
        <View style={styles.box}>
          <Text>Box 1</Text>
        </View>
        <View style={styles.box}>
          <Text>Box 2</Text>
        </View>
        <View style={styles.box}>
          <Text>Box 3</Text>
        </View>
        <View style={styles.box}>
          <Text>Box 4</Text>
        </View>
        <View style={styles.box}>
          <Text>Box 5</Text>
        </View>
        <View style={styles.box}>
          <Text>Box 6</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#3498db",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // Ensures content wraps on smaller screens
    justifyContent: "space-between",
    padding: 10,
  },
  box: {
    width: Dimensions.get("window").width > 500 ? "45%" : "100%", // Adjust width based on screen size
    height: 100,
    backgroundColor: "#e67e22",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  footer: {
    backgroundColor: "#2c3e50",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default FlexboxChallenge;
