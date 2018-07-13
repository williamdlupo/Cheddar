import React, { Component } from "react";
import firebase from "react-native-firebase";
import PlaidAuthenticator from "react-native-plaid-link";

import { connect } from "react-redux";
import {
  storeUser,
  getUserDoc,
  getTransactions
} from "../store/actions/actionBundle";

class PlaidLink extends Component {
  render() {
    return (
      <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey="f326b59ea06cf5309ebd2861388d13"
        env="sandbox"
        product="transactions"
        webhook="https://dhwebhookentry.azurewebsites.net/api/PlaidWebHook?code=t6wJsM/S4m1Sg1H4SutHgArWcPSNSSTEqu6rbSWiaY6rCPSLDynamw=="
      />
    );
  }
  onMessage = async data => {
    if (data.action == "plaid_link-undefined::exit") {
      this.props.navigation.navigate("AccountSync");
    }
    if (data.action == "plaid_link-undefined::connected") {
      var obj = JSON.stringify({
        uid: this.props.user.uid,
        public_token: data.metadata.public_token,
        institution_name: data.metadata.institution.name,
        accounts: data.metadata.accounts
      });
      await fetch(
        "https://dhwebhookentry.azurewebsites.net/api/AddItem?code=KmecgKs5FLjCsmidGtoDomw976PhWkuJY6SpR2uN9eAfeMh3cgGhCg==",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uid: this.props.user.uid,
            public_token: data.metadata.public_token,
            institution_name: data.metadata.institution.name,
            accounts: data.metadata.accounts
          })
        }
      )
        .then(await Promise.all(this.getUserDocument(this.props.user.uid)))
        .then(this.props.navigation.navigate("AccountSync"));
    }
  };
  async getUserDocument(uid) {
    await fetch(
      "https://dhwebhookentry.azurewebsites.net/api/GetUserDocument/" +
        uid +
        "?code=1zVI3irRXN7NVd88DX8Icg22nTgD3XJ/TyUP8NFEN8ipPW0VfFKTmA==",
      {
        method: "POST"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.props.onGetUserDoc(json[0]);
      })
      .catch(ex => {
        console.log("parsing failed", ex);
      });
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
)(PlaidLink);
