{
  /*Challenge: challenge-view-text-image.js

Create a card layout that uses a combination of View, Text, and Image. Each card should have:

    An image at the top (either local or remote).
    A title (Text) below the image.
    A short description (Text) below the title.

Requirements:

    Use View to organize the layout.
    Style the text and images using StyleSheet.
    Make the image circular and align the text at the center. */
}

import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ChallengeViewTextImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.localImg}
          source={{ uri: "https://via.placeholder.com/150" }}
          accessibilityLabel="Placeholder Image"
        />
      </View>
      <View>
        <Text style={styles.text}>Challenge View Text Image</Text>
      </View>

      <Text style={styles.description}>
        This is the Challenge Of Text View and Image given by GPT to learn
        Native Faster and Exllent way !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 350,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // This is important for shadows on Android
    backgroundColor: "#d3d3d3",
  },

  text: {
    justifyContent: "center", // This is for container content alignment
    textAlign: "center", // Centers the text inside the box
    fontSize: 25,
    color: "red",
    borderRadius: 12,
    backgroundColor: "white",
    height: 100,
    width: 300,
    padding: 20, // Adds space around the text
  },

  localImg: {
    height: 200,
    width: 200,
    borderRadius: 120,
  },

  description: {
    height: 100,
    width: 300,
    backgroundColor: "blue",
    borderRadius: 5,
    textAlign: "center", // Centers the text inside the description box
    padding: 10, // Adds space around the text
    color: "white", // Makes the text color white for better contrast
  },

  imgContainer: {
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    borderRadius: 10,
  },
});

export default ChallengeViewTextImage;
