import React, { Component } from "react";
import firebase from "react-native-firebase";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  storeUser,
  getUserDoc,
  getTransactions
} from "../store/actions/actionBundle";

class Profile extends Component {
  render() {
    const account = (
      <View style={styles.topContainer}>
        <Text style={styles.heading}>{this.props.user_doc.email}</Text>
        <View style={styles.line} />
        <View style={styles.menuContainer}>
          <Text style={styles.sectionHeading}>Profile</Text>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Email</Text>
            <Text style={styles.listItemTextR}>
              <FontAwesome>{Icons.caretRight}</FontAwesome>
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Password</Text>
            <Text style={styles.listItemTextR}>
              <FontAwesome>{Icons.caretRight}</FontAwesome>
            </Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.sectionHeading}>Financial</Text>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => this.props.navigation.navigate("Accounts")}
          >
            <Text style={styles.listItemText}>Synced Accounts</Text>
            <Text style={styles.listItemTextR}>
              <FontAwesome>{Icons.caretRight}</FontAwesome>
            </Text>
          </TouchableOpacity>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Profile</Text>
            <Text style={styles.listItemTextR}>
              <FontAwesome>{Icons.caretRight}</FontAwesome>
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>Goals</Text>
            <Text style={styles.listItemTextR}>
              <FontAwesome>{Icons.caretRight}</FontAwesome>
            </Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.signOffButton}
            onPress={() => this.Logout.bind(this)}
          >
            <Text style={styles.btnText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return <View style={styles.container}>{account}</View>;
  }
  Logout = () => {
    firebase.auth().signOut();
  };
}

const mapStateToProps = state => {
  return {
    user: state.reducer.user,
    user_doc: state.reducer.user_doc,
    transactions: state.reducer.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreUser: user => dispatch(storeUser(user)),
    onGetUserDoc: uid => dispatch(getUserDoc(uid)),
    onGetTransactions: () => dispatch(getTransactions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  menuContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start"
  },
  heading: {
    alignSelf: "center",
    flexDirection: "row",
    color: "#0fbcf9",
    fontSize: 22,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  sectionHeading: {
    flexDirection: "row",
    color: "#f7b731",
    fontSize: 22,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  signOffButton: {
    height: 50,
    backgroundColor: "#ff3f34",
    alignSelf: "stretch",
    marginTop: 10,
    marginBottom: 30,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  text: {
    margin: 10,
    fontSize: 15,
    color: "white",
    alignSelf: "center"
  },
  btnText: {
    fontSize: 20,
    color: "white",
    alignSelf: "center"
  },
  line: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2
  },
  listItem: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between"
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
    marginRight: 30
  },
  bottomContainer: {
    backgroundColor: "black",
    justifyContent: "flex-end"
  }
});
