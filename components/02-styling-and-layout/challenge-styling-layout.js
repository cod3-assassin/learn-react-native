import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Determine if the screen is in landscape mode
const isLandscape = width > height;

// Layout Component
const Layout = () => (
  <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Section 1</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Section 2</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Section 3</Text>
      </View>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  </SafeAreaView>
);

const ChallengeStylingLayout = () => <Layout />;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
    // Adjust padding based on orientation
    paddingTop: Platform.OS === "ios" ? (isLandscape ? 10 : 20) : 0,
  },
  header: {
    backgroundColor: "#3b5998",
    padding: 15,
    // Flexbox properties to center content
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    // Flexbox properties for layout
    flexDirection: isLandscape ? "row" : "column",
    justifyContent: "space-between",
    alignItems: "center",
    // Adjust content padding based on orientation
    paddingVertical: isLandscape ? 10 : 20,
  },
  section: {
    // Flexbox properties to handle section layout
    flex: 1,
    margin: 5,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    // Responsive width
    width: isLandscape ? "30%" : "100%",
    height: isLandscape ? 100 : 150,
    borderRadius: 5,
  },
  sectionText: {
    fontSize: 18,
    color: "#333",
  },
  footer: {
    backgroundColor: "#3b5998",
    padding: 15,
    // Flexbox properties to center content
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ChallengeStylingLayout;
