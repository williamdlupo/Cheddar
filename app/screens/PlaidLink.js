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
        "https://dhwebhookentry.azurewebsites.net/api/AddItem?code=6XlWFIYImoirR26sBiV2sAKgtiZPW97j2v0A5NP8aTnG/BAZnVOgwA==",
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
        "?code=76i6Czbahm2jqVcyuLCZp6RlhaV4qCyCbv73gO/PgnNXB8ls6Trv8A==",
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
    onGetTransactions: () => dispatch(getTransactions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaidLink);
