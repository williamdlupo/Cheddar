import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import moment from 'moment';

const transItem = props => (
  <View style={styles.container}>
    <View style={styles.listItem}>
      {props.item.name.length < 20 ?  <Text style={styles.listItemHead}>{props.item.name}</Text> : <Text style={styles.listItemHead}>{props.item.name.substring(0, 20)}...</Text>}
      {props.item.amount > 0 ? <Text style={styles.listItemTextR}>(${props.item.amount})</Text> : <Text style={styles.listItemTextRP}>${props.item.amount*(-1)}</Text>}
    </View>
    <Text style={styles.listItemText}>{moment(props.item.date).format("MM/DD/YY")}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#151b20",
  },
  listItem: {
    flex: 1,    
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listItemHead: {
    justifyContent: "flex-start",
    color: "#d2dae2",
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
    // color: '#d2dae2',
    color: "#05c46b",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  listItemTextR: {
    color: '#d2dae2',
    // color: "#ff3f34",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});
export default transItem;
