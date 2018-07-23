import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

import { connect } from "react-redux";
import {
  storeUser,
  getUserDoc,
  getTransactions
} from "../store/actions/actionBundle";

class DateSelect extends Component {
  render() {
    const select = (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.listItem}>
            <Text style={styles.listItemHead}>Account:</Text>
            <TouchableOpacity>
              {this.props.account_id == "" ? (
                <Text style={styles.listItemTextR}>
                  {" "}
                  All Accounts <FontAwesome>{Icons.arrowRight}</FontAwesome>
                </Text>
              ) : (
                <Text style={styles.listItemTextR}>
                  {this.props.account_id}
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemHead}>From:</Text>
            <TouchableOpacity>
              <Text style={styles.listItemTextR}>
                {" "}
                {this.props.start_date}{" "}
                <FontAwesome>{Icons.calendar}</FontAwesome>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemHead}>To:</Text>
            <TouchableOpacity>
              <Text style={styles.listItemTextR}>
                {" "}
                {this.props.end_date}{" "}
                <FontAwesome>{Icons.calendar}</FontAwesome>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    return select;
  }
}

const mapStateToProps = state => {
  return {
    user: state.reducer.user,
    user_doc: state.reducer.user_doc,
    transactions: state.reducer.transactions,
    account_id: state.reducer.account_id,
    start_date: state.reducer.start_date,
    end_date: state.reducer.end_date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreUser: user => dispatch(storeUser(user)),
    onGetUserDoc: uid => dispatch(getUserDoc(uid)),
    onGetTransactions: transactions => dispatch(getTransactions(transactions))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateSelect);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#1e272e",
    justifyContent: "flex-start"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
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
    fontStyle: "italic"
  },
  listItemTextRP: {
    color: "#05c46b",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  listItemTextR: {
    color: "#f7b731",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});
