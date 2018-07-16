import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const transItem = props => (
  <View style={styles.container}>
    <View style={styles.listItem}>
      <Text style={styles.listItemHead}>{props.item.name}</Text>
      {props.item.amount > 0 ? <Text style={styles.listItemTextR}>(${props.item.amount})</Text> : <Text style={styles.listItemTextR}>${props.item.amount}</Text>}
    </View>
    <Text style={styles.listItemText}>{props.item.date}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#1e272e",
  },
  listItem: {
    flex: 1,    
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listItemHead: {
    justifyContent: "flex-start",
    color: "white",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  listItemText: {
    justifyContent: "flex-start",
    color: "#0fbcf9",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    fontStyle: 'italic'
  },
  listItemTextRP: {
    color: "#05c46b",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  listItemTextR: {
    color: "#ff3f34",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});
export default transItem;
