import React, { Component } from "react";
import firebase from "react-native-firebase";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import {
  storeUser,
  getUserDoc,
  getTransactions
} from "../store/actions/actionBundle";

import ListItem from "../components/ListItem";

class AccountSync extends Component {
  render() {
    const noAccounts = (
      <View style={styles.topContainer}>
        <Text style={styles.heading}>Let's Sync Some MF Accounts!</Text>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.syncButton}
            onPress={() => this.props.navigation.navigate("PlaidLink")}
          >
            <Text style={styles.btnText}>Sync An Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signOutbutton}
            onPress={this.Logout.bind(this)}
          >
            <Text style={styles.btnText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const hasAccounts = (
      <View style={styles.topContainer}>
        <FlatList
          style={styles.Listcontainer}
          data={this.props.user_doc.items}
          renderItem={info => <ListItem item={info.item} />}
        />
        
        <View style={styles.bottomCOntainer}>
          <TouchableOpacity
            style={styles.syncButton}
            onPress={() => this.props.navigation.navigate("PlaidLink")}
          >
            <Text style={styles.btnText}>Sync Another Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (
      <View style={styles.container}>
        {this.props.user_doc.items.length > 0
          ? hasAccounts
          : noAccounts}
      </View>
    );
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
)(AccountSync);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  Listcontainer: {
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
  bottom: {
    flex: 3,
    backgroundColor: "black",
    justifyContent: "flex-end"
  },
  bottomCOntainer: {
    backgroundColor: "black",
    justifyContent: "flex-end"
  },
  heading: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: 'stretch',
    color: "#f7b731",
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10
  },
  inst_heading: {
    justifyContent: "center",
    flexDirection: "row",
    color: "white",
    fontSize: 40,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  signOutbutton: {
    height: 50,
    backgroundColor: "#4b6584",
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  syncButton: {
    height: 50,
    backgroundColor: "#05c46b",
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
  }
});
