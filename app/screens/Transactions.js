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
import TransItem from '../components/TransItem';

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      account_id: "",
      start_date: '2018-07-01',
      end_date: '2018-07-13'
    };
  }

  componentDidMount() {
      if (this.props.transactions == null)
      {
        this.getTransactions();
      }
  }

  async getTransactions() {
    try {
      let response = await fetch(
        "https://projectsenti-api.azurewebsites.net/api/GetTransactions?code=KlaWFrSVQpxw6gLhFxYimImWoZZWNnpEH5CQ1QyWl2frnfjHUdyF2w==",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              uid: this.props.user.uid,
              account_id: this.state.account_id,
              start_date: this.state.start_date,
              end_date: this.state.end_date
            })
          }
      );
      let responseJson = await response.json();
      let trans = await this.props
        .onGetTransactions(responseJson.transactions)
        .then(this.setState({ loading: false }));
      return trans;
    } catch (ex) {
      console.log("parsing failed", ex);
    }
  }

  render() {
    const displayTransactions = (
      <View style={styles.topContainer}>
        <FlatList
          style={styles.Listcontainer}
          data={this.props.transactions}
          renderItem={trans => <TransItem item={trans.item} />}
        />
      </View>
    );
    return <View style={styles.container}>{displayTransactions}</View>;
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
    onGetTransactions: (transactions) => dispatch(getTransactions(transactions))
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
  },
  line: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderBottomColor: "white",
    borderBottomWidth: 2
  }
});
