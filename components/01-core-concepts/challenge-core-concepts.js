import React from "react";
import {
  View,
  Text,
  Image,
  SectionList,
  StyleSheet,
  Platform,
} from "react-native";

// Sample data
const DATA = [
  {
    title: "Technology",
    data: [
      {
        id: "1",
        title: "New Smartphone Launch",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: "2",
        title: "AI Advancements",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    title: "Sports",
    data: [
      {
        id: "3",
        title: "Football World Cup",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: "4",
        title: "Olympics 2024 Preview",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    title: "Health",
    data: [
      {
        id: "5",
        title: "Mental Health Awareness",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: "6",
        title: "Exercise Tips",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  },
];

// News Header Component
const NewsHeader = () => (
  <View style={styles.headerContainer}>
    <Image
      source={{ uri: "https://via.placeholder.com/300" }}
      style={styles.headerImage}
    />
    <Text style={styles.headerText}>Breaking News: Major Event Unfolds</Text>
  </View>
);

// Item Component
const NewsItem = ({ title, imageUrl }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: imageUrl }} style={styles.itemImage} />
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

// Main App Component
const CoreConceptChallenge = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsItem title={item.title} imageUrl={item.imageUrl} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ListHeaderComponent={NewsHeader}
        style={styles.list} // Updated list style
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen height
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    padding: 20,
    alignItems: Platform.OS === "ios" ? "center" : "flex-start",
    backgroundColor: Platform.OS === "ios" ? "#fff" : "#f0f0f0",
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  headerText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: Platform.OS === "ios" ? "center" : "left",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "600",
    backgroundColor: "#eee",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
    color: Platform.OS === "ios" ? "#000" : "#444",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Helvetica",
  },
  list: {
    flex: 1, // Ensures the SectionList takes up all available space
  },
});

export default CoreConceptChallenge;
