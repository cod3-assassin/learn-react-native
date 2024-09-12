import React from "react";

import { FlatList, View, Text, StyleSheet } from "react-native";

const FlatListBasics = () => {
  //Sample data for the FlatList

  const data = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" },
    { id: 9, title: "Item 8" },
    { id: 10, title: "Item 10" },
    { id: 11, title: "Item 11" },
    { id: 12, title: "Item 12" },
    { id: 13, title: "Item 13" },
    { id: 14, title: "Item 14" },
    { id: 15, title: "Item 15" },
    { id: 16, title: "Item 16" },
    { id: 17, title: "Item 17" },
    { id: 18, title: "Item 18" },
    { id: 19, title: "Item 19" },
    { id: 20, title: "Item 20" },
  ];

  // Function to render each item in the FlatList
  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data} // Data source for the FlatList
      renderItem={renderItem} // Function to render each item
      keyExtractor={(item) => item.id} // Unique key for each item
      ListHeaderComponent={<Text style={styles.header}>FlatList Example</Text>} // Optional header
      ListFooterComponent={<Text style={styles.footer}>End of List</Text>} // Optional footer
      contentContainerStyle={styles.listContainer} // Style for the FlatList container
      showsVerticalScrollIndicator={false} //Hide and show vertical indicator
    />
  );
};

// Styles for the components
const styles = StyleSheet.create({
  listContainer: {
    padding: 20, // Padding inside the FlatList container
  },
  itemContainer: {
    backgroundColor: "lightgrey", // Background color for each item
    padding: 15, // Padding inside each item
    marginVertical: 10, // Vertical margin between items
    borderRadius: 10, // Rounded corners for each item
  },
  itemText: {
    fontSize: 18, // Font size for the item text
  },
  header: {
    fontSize: 24, // Font size for the header
    fontWeight: "bold", // Bold font weight for the header
    marginBottom: 10, // Margin below the header
  },
  footer: {
    fontSize: 18, // Font size for the footer
    fontStyle: "italic", // Italic font style for the footer
    marginTop: 10, // Margin above the footer
  },
});

export default FlatListBasics;
