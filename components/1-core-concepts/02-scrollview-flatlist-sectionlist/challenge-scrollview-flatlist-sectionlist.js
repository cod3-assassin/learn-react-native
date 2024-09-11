import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

// Data generation
const CONTACTS = Array.from({ length: 1000 }, (_, index) => ({
  id: index.toString(),
  name: `John ${index + 1}`,
  phone: `${Math.floor(Math.random() * 900 + 100)}-${Math.floor(
    Math.random() * 900 + 100
  )}-${Math.floor(Math.random() * 9000 + 1000)}`,
}));

// Function for rendering individual contact
const renderContact = ({ item }) => (
  <View style={styles.contactContainer}>
    <Text style={styles.contactName}>{item.name}</Text>
    <Text style={styles.contactPhone}>{item.phone}</Text>
  </View>
);

const ChallengeScrollFlatListSectionList = () => {
  return (
    <FlatList
      data={CONTACTS}
      renderItem={renderContact}
      keyExtractor={(item) => item.id}
      initialNumToRender={15} // Number of items to render initially (improves performance)
      maxToRenderPerBatch={15} // Number of items to render in each scroll batch
      windowSize={5} // Number of items outside the viewport to keep mounted
      removeClippedSubviews={true} // Optimizes memory usage by removing invisible items
      updateCellsBatchingPeriod={50} // Reduces the rate of re-rendering items
      onEndReachedThreshold={0.5} // When to trigger loading of more items
      onEndReached={() => console.log("End reached! Load more data here.")} // Placeholder for loading more data
      ListFooterComponent={<Text style={styles.footerText}>End of List</Text>} // Optional footer
    />
  );
};

// Styles for better layout
const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactPhone: {
    fontSize: 16,
    color: "gray",
  },
  footerText: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: "gray",
  },
});

export default ChallengeScrollFlatListSectionList;
