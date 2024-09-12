import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const SafeAreaContextExample = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>
          Safe area insets: {JSON.stringify(insets)}
        </Text>
      </SafeAreaView>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaContextExample />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  safeArea: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default App;
