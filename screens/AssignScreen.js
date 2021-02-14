import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AssignScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.AssignDeet}</Text>
    </View>
  );
};

export default AssignScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    margin: 20,
    padding: 20,
  },
});
