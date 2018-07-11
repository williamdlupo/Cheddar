import React, { Component } from "react";
import firebase from "react-native-firebase";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>I am the Profile Screen.</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => this.props.navigation.navigate("Accounts")}
        >
          <Text style={styles.btnText}>Authorize An Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black"
  },
  heading: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "#f7b731",
    fontSize: 40
  },
  text: {
    margin: 10,
    fontSize: 15,
    color: "white",
    alignSelf: "center"
  },
  loginButton: {
    height: 50,
    backgroundColor: "#f7b731",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  registerButton: {
    height: 50,
    backgroundColor: "#05c46b",
    alignSelf: "stretch",
    marginTop: 30,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  
  btnText: {
    fontSize: 20,
    color: "white",
    alignSelf: "center"
  },
});
