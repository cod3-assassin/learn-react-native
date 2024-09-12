import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageHandling = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Image Example</Text>
      {/*Local Image*/}

      <Image
        style={styles.localImg}
        source={require("./Img/junior-ferreira-7esRPTt38nI-unsplash.jpg")}
      />

      {/* Remote Image */}

      <Image
        style={styles.remoteImg}
        source={{ uri: "https://via.placeholder.com/150" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center", // Center-align the content
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  localImg: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  remoteImg: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
  },
});

export default ImageHandling;
