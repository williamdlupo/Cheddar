import React from "react";
import { StatusBar, View, Text, StyleSheet, ActivityIndicator } from "react-native";

const Loading = (props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Loading...</Text>
    <ActivityIndicator
          animating= {props.loading}
          size="large"
          style={styles.loader}
        />
        <StatusBar bar="default"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "black",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column"
  },
  heading: {
    justifyContent: "center",
    flexDirection: "row",
    color: "#0fbcf9",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  loader: {
    marginTop: 20
  },
});
export default Loading;
