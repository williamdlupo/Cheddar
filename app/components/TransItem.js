import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const transItem = props => (
  <View style={styles.container}>
    <Text style={styles.listItemText}>{props.item.name}</Text>
    <View style={styles.Listcontainer}>
      <Text style={styles.listItemText}>{props.item.date}</Text>
      <Text style={styles.listItemTextR}>{props.item.amount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  listItem: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  institutionHeader: {
    justifyContent: "center",
    flexDirection: "row",
    color: "#0fbcf9",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  listItemText: {
    justifyContent: "flex-start",
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  listItemTextR: {
    color: "#f7b731",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});
export default transItem;
