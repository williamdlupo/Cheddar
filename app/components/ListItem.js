import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const listItem = props => (
  <View>
    <Text style={styles.institutionHeader}>{props.item.institution_name}</Text>
    <FlatList
      style={styles.Listcontainer}
      data={props.item.accounts}
      renderItem={info => (
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>{info.item.name}</Text>
          <Text style={styles.listItemTextR}> xxxx-{info.item.mask}
          </Text>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
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
    marginTop:10,
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
  },
});
export default listItem;
