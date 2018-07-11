import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: firebase.auth().currentUser
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>I am the Transaction Screen.</Text>
            </View>
        )
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
    text: {
        margin: 10,
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    }
});