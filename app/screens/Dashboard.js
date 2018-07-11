import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { createRootNavigator } from "../routeconfig";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>I am the Dashboard Screen.</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.Logout.bind(this)}>
                    <Text style={styles.btnText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
    Logout = () => {
        firebase.auth().signOut();
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
        backgroundColor: '#4b6584'
    },
    resendButton: {
        height: 50,
        alignSelf: 'stretch',
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: '#f7b731'
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