import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Platform } from "react-native";

// SafeAreaView Layout
const SafeAreaViewLayout = () => (
  <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.contentText}>Main Content</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  </SafeAreaView>
);

// Normal View Layout
const NormalViewLayout = () => (
  <View style={styles.normalContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
    <View
      style={[styles.content, { paddingTop: Platform.OS === "ios" ? 20 : 0 }]}
    >
      <Text style={styles.contentText}>Main Content</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Text style={styles.title}>SafeAreaView Layout</Text>
      <SafeAreaViewLayout />
    </View>
    <View style={styles.column}>
      <Text style={styles.title}>Normal View Layout</Text>
      <NormalViewLayout />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  column: {
    flex: 1,
    margin: 5,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  normalContainer: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    paddingTop: Platform.OS === "ios" ? 20 : 0, // Manual safe area padding
  },
  header: {
    backgroundColor: "#3b5998",
    padding: 10,
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
  contentText: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: "#3b5998",
    padding: 10,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default App;
