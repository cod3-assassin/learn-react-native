import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Text styling: You can apply styles like fontSize, fontWeight, textAlign, and color to control how the text appears on the screen.

const TextStyling = () => {
  return (
    <View style={styles.container}>
      {/* The Text component in React Native is used to display text on the screen.
     Styling can be applied to the Text component to control font size, color, alignment, etc. */}
      <Text style={styles.heading}>Header Text</Text>
      <Text style={styles.subheading}>Subheader Text</Text>

      {/* The lineHeight in the paragraph controls the spacing between lines.*/}
      <Text style={styles.paragraph}>
        This is the pargaph Demonstration how to style text in React Native. You
        can adjust font size, color, alignment, and more!
      </Text>
      <Text>This is the Plain text without any Style </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20, // Adds padding inside the view
  },
  heading: {
    fontSize: 24, // Larger text for the heading
    fontWeight: "bold", // Bold style
    color: "blue", // Dark text color
  },
  subheading: {
    fontSize: 18, // Slightly smaller than heading
    color: "#666", // Lighter color for subheading
    marginVertical: 10, // Adds space above and below the subheading
  },
  paragraph: {
    fontSize: 16, // Standard text size
    color: "#000", // Black text color
    lineHeight: 24, // Adds spacing between lines
  },
});

export default TextStyling;
