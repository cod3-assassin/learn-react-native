// Importing necessary components from React Native
import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

const ScrollViewBasics = () => {
  return (
    // ScrollView allows for scrolling content vertically or horizontally
    <ScrollView
      style={styles.scrollViewContainer}
      horizontal={false} // Set to true for horizontal scrolling
      showsVerticalScrollIndicator={false} // hide the vertical scroll indicator
    >
      {/* View component to contain other components */}
      <View style={styles.contentContainer}>
        {/* Adding multiple Text components for demonstration */}
        <Text style={styles.textItem}>Item 1</Text>
        <Text style={styles.textItem}>Item 2</Text>
        <Text style={styles.textItem}>Item 3</Text>
        <Text style={styles.textItem}>Item 4</Text>
        <Text style={styles.textItem}>Item 5</Text>
        <Text style={styles.textItem}>Item 6</Text>
        <Text style={styles.textItem}>Item 7</Text>
        <Text style={styles.textItem}>Item 8</Text>
        <Text style={styles.textItem}>Item 9</Text>
        <Text style={styles.textItem}>Item 10</Text>

        {/* Adding an Image component to demonstrate mixed content */}
        <Image
          style={styles.image}
          source={{ uri: "https://via.placeholder.com/150" }} // URL of the image
          alt="Placeholder Image" // Alternative text for the image
        />
      </View>
    </ScrollView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  scrollViewContainer: {
    margin: 20, // Adds margin around the ScrollView container
  },
  contentContainer: {
    padding: 20, // Adds padding around the content inside the ScrollView
  },
  textItem: {
    fontSize: 20,
    backgroundColor: "lightblue", // Light blue background for each text item
    marginVertical: 10, // Vertical margin between items
    padding: 10, // Padding inside each text item
    borderRadius: 10, // Rounds the corners of the text item
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10, // Rounds the corners of the image
    marginVertical: 20, // Vertical margin around the image
  },
});

export default ScrollViewBasics;
