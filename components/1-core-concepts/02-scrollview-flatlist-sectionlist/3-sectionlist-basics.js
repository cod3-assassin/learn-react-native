// Importing necessary components from React Native
import React from "react";
import { SectionList, View, Text, StyleSheet } from "react-native";

const SectionListBasics = () => {
  // Data for the SectionList
  const DATA = [
    {
      title: "Fruits",
      data: ["Apple", "Banana", "Orange", "Mango"],
    },
    {
      title: "Vegetables",
      data: ["Carrot", "Broccoli", "Spinach", "Peas"],
    },
    {
      title: "Dairy",
      data: ["Milk", "Cheese", "Yogurt", "Butter"],
    },
  ];

  // Function to render each item in the section
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  // Function to render the section headers
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={DATA} // Data source for the SectionList
      renderItem={renderItem} // Function to render each item in the section
      renderSectionHeader={renderSectionHeader} // Function to render the section header
      keyExtractor={(item, index) => item + index} // Unique key for each item
      ListFooterComponent={<Text style={styles.footer}>End of List</Text>} // Optional footer
      contentContainerStyle={styles.listContainer} // Style for the SectionList container
    />
  );
};

// Styles for the components
const styles = StyleSheet.create({
  listContainer: {
    padding: 20, // Padding inside the SectionList container
  },
  itemContainer: {
    backgroundColor: "lightblue", // Background color for each item
    padding: 10, // Padding inside each item
    marginVertical: 5, // Vertical margin between items
    borderRadius: 5, // Rounded corners for each item
  },
  itemText: {
    fontSize: 18, // Font size for the item text
  },
  headerContainer: {
    backgroundColor: "darkblue", // Background color for each section header
    padding: 15, // Padding inside each header
    marginVertical: 10, // Vertical margin for headers
    borderRadius: 10, // Rounded corners for each header
  },
  headerText: {
    fontSize: 20, // Font size for the header text
    color: "white", // Text color for headers
    fontWeight: "bold", // Bold font for headers
  },
  footer: {
    fontSize: 16, // Font size for the footer
    marginTop: 10, // Margin above the footer
    fontStyle: "italic", // Italic font style for the footer
  },
});

export default SectionListBasics;
