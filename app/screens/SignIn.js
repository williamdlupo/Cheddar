import React, { Component } from "react";
import firebase from "react-native-firebase";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

export default class SigninIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false
    };
  }
  render() {
    var errorCtrl = <View />;
    if (this.state.errMessage != null) {
      errorCtrl = <Text style={styles.error}>{this.state.errMessage}</Text>;
    }
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={{ color: "#f7b731", fontSize: 30 }}>Cheddar</Text>
          <Text style={{ color: "white", fontSize: 30 }}>Stack</Text>
        </View>
        {errorCtrl}
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          p
          placeholderTextColor="grey"
        />
        <TouchableOpacity
          onPress={this.onLogin.bind(this)}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onRegister.bind(this)}
          style={styles.registerButton}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}
        />
      </View>
    );
  }
  onLogin = () => {
    this.setState({ showProgress: true });

    const { email, password } = this.state;
    if (email && password != null) {
      firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password)
        .then(user => {
          this.setState({ showProgress: false });
        })
        .catch(error => {
          const { code, message } = error;
          this.setState({ showProgress: false });
          this.setState({ errMessage: error.message });
        });
    }
  };
  onRegister = () => {
    this.setState({ showProgress: true });
    const { email, password } = this.state;
    if (email && password != null) {
      firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .then(user => {
          var uid = firebase.auth().currentUser.uid;
          fetch(
            "https://dhwebhookentry.azurewebsites.net/api/CreateUser?code=DyjKssCI01YaGYSalJRvua9SuppbgJh/555HTUqD6NalucVievr4bA==",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                id: "",
                uid: uid,
                email: email,
                items: ""
              })
            }
          ).then(() => {
            this.setState({ showProgress: false });
          });
        })
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification();
        })
        .catch(error => {
          const { code, message } = error;
          this.setState({ showProgress: false });
          this.setState({ errMessage: error.message });
        });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black"
  },
  heading: {
    justifyContent: "center",
    flexDirection: "row"
  },
  input: {
    alignSelf: "stretch",
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    padding: 4,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    color: "white",
    marginLeft: 20,
    marginRight: 20
  },
  loginButton: {
    height: 50,
    backgroundColor: "#f7b731",
    alignSelf: "stretch",
    marginTop: 30,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  registerButton: {
    height: 50,
    backgroundColor: "#05c46b",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    alignSelf: "center"
  },
  loader: {
    marginTop: 20
  },
  error: {
    alignSelf: "center",
    color: "red",
    paddingTop: 10,
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20
  }
});
