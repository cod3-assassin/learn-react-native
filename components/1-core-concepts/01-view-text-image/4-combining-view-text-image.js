import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CombineViewTextImage = () => {
  return (
    <View style={styles.container}>
      {/* Heading Text */}

      <Text style={styles.heading}>Welcome to my Profile</Text>

      {/* Profile image */}

      <Image
        style={styles.profileImg}
        source={{ uri: "https://via.placeholder.com/150" }}
      />

      {/* Description Text */}

      <Text style={styles.description}>
        Hello , My Name is John Doe , and I am Learning React Native
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});

export default CombineViewTextImage;
