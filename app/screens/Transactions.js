import React, { Component } from "react";
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

import Loading from "../screens/Loading";
import TransItem from "../components/TransItem";

class Transactions extends Component {
  render() {
    const displayTransactions = (
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>All Accounts</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PlaidLink")}
          >
            <Text style={styles.heading}>Date Range</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.Listcontainer}
          data={this.props.transactions}
          renderItem={trans => <TransItem item={trans.item} />}
        />
      </View>
    );
    const displayLoading = (
      <View style={styles.topContainer}>
        <Loading loading={true} />
      </View>
    );

    return this.props.transactions == null ? (
      displayLoading
    ) : (
      <View style={styles.container}>{displayTransactions}</View>
    );
  }
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
    onGetTransactions: transactions => dispatch(getTransactions(transactions))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);

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
    justifyContent: "center",
    flexDirection: "row",
    color: "#f7b731",
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  header: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    height: 50,
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "#4b6584"
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
  }
});
