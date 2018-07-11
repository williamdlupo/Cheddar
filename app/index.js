import React from "react";
import { createRootNavigator } from "./routeconfig";
import { StyleSheet, View } from "react-native";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import {
  storeUser,
  getUserDoc,
  getTransactions
} from "./store/actions/actionBundle";
import Loading from "./screens/Loading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged(user => {
      this.props.onStoreUser(user);

      if (user) {
        this.getUserDocument(user.uid);
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    //test if user is logged in, if so, check if the email is verified.
    var verified =
      this.props.user != null
        ? this.props.user.emailVerified
          ? true
          : false
        : false;

    //check if user has accounts if they are a verified user
    var hasAccounts =
      this.props.user_doc !== null
        ? this.props.user_doc.items.length > 0
          ? true
          : false
        : false;
    const Layout = createRootNavigator(this.props.user, verified, hasAccounts);
    console.log(this.props.user_doc);
    console.log(this.state.loading);
    const Launch = <Layout />;

    const displayLoading = (
      <View style={styles.topContainer}>
        <Loading loading={this.state.loading} />
      </View>
    );

    return this.props.user ? (
      this.state.loading ? (
        displayLoading
      ) : (
        <View style={styles.container}>{Launch}</View>
      )
    ) : (
      <View style={styles.container}>{Launch}</View>
    );
  }

  async getUserDocument(uid) {
    try {
      let response = await fetch(
        "https://dhwebhookentry.azurewebsites.net/api/GetUserDocument/" +
          uid +
          "?code=76i6Czbahm2jqVcyuLCZp6RlhaV4qCyCbv73gO/PgnNXB8ls6Trv8A==",
        {
          method: "POST"
        }
      );
      let responseJson = await response.json();
      let test = await this.props
        .onGetUserDoc(responseJson[0])
        .then(this.setState({ loading: false }));
      return test;
    } catch (ex) {
      console.log("parsing failed", ex);
    }
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
    onGetUserDoc: doc => dispatch(getUserDoc(doc)),
    onGetTransactions: () => dispatch(getTransactions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start"
  }
});
