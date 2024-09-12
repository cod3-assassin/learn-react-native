// Import necessary components from React Native
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

// Generate a large list of dummy data
const DATA = Array.from({ length: 1000 }, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

// Component to render individual list items
const ListItem = ({ title }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

const PerformanceWithLargeLists = () => {
  return (
    <FlatList
      data={DATA} // Data source for FlatList
      renderItem={({ item }) => <ListItem title={item.title} />} // Render each item
      keyExtractor={(item) => item.id} // Unique key for each item to improve performance
      initialNumToRender={15} // Number of items to render initially (improves performance)
      maxToRenderPerBatch={15} // Number of items to render in each scroll batch
      windowSize={5} // Number of items outside the viewport to keep mounted
      removeClippedSubviews={true} // Optimizes memory usage by removing invisible items
      updateCellsBatchingPeriod={50} // Reduces the rate of re-rendering items
      onEndReachedThreshold={0.5} // When to trigger loading of more items
      onEndReached={() => console.log("End reached! Load more data here.")}
      ListFooterComponent={<Text style={styles.footer}>End of List</Text>} // Optional footer
    />
  );
};

// Styles for the list and items
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f0f0f0", // Background color for each item
    padding: 15, // Padding inside each item
    marginVertical: 8, // Vertical margin between items
    borderRadius: 5, // Rounded corners for each item
  },
  itemText: {
    fontSize: 18, // Font size for the item text
    color: "#333", // Text color for the item text
  },
  footer: {
    fontSize: 16, // Font size for the footer
    marginVertical: 20, // Margin around the footer
    textAlign: "center", // Center the footer text
  },
});

export default PerformanceWithLargeLists;
