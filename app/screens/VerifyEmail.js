import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class VerifyEmail extends Component {
    constructor() {
        super();
        this.state = {
            user: firebase.auth().currentUser
        }
    }
    render() {
        var message = <View />
        if (this.state.emailSent) {
            message =
                <View style={styles.messageBackground}>
                    <Text style={styles.msgText}>Great! Email sent!</Text>
                </View>;
        }
        return (
            <View style={styles.container}>
                {message}
                <Text style={styles.heading}>Hold Up!</Text>
                <View style={styles.line}></View>
                <Text style={styles.text}>Looks like your email address hasn't been verified.
        For your safety, please click the link we emailed to you</Text>
                <TouchableHighlight
                    style={styles.resendButton}
                    onPress={this.ResendLink.bind(this)}>
                    <Text style={styles.btnText}>Resend Email</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.Logout.bind(this)}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableHighlight>
            </View>
        )
    };
    Logout = () => {
        firebase.auth().signOut();
    }
    ResendLink = () => {
        this.state.user.sendEmailVerification()
            .then(() => {
                this.setState({ emailSent: true });
            });
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    heading: {
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#f7b731',
        fontSize: 40
    },
    button: {
        height: 50,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#05c46b',
        marginLeft: 20,
        marginRight: 20
    },
    resendButton: {
        height: 50,
        alignSelf: 'stretch',
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: '#f7b731',
        marginLeft: 20,
        marginRight: 20
    },
    text: {
        margin: 10,
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    btnText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    messageBackground: {
        height: 50,
        alignSelf: 'stretch',
        marginBottom: 20,
        justifyContent: 'center',
        backgroundColor: '#26de81',
        color: 'white'
    },
    msgText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    line: {
        marginBottom: 10,
        marginTop: 10,
        marginRight: 50,
        marginLeft: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    }
});