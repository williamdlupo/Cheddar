import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FontAwesome, { Icons } from "react-native-fontawesome";

export default class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("DateSelect")}>
              <FontAwesome style={styles.notificationIcon}>{Icons.bell}</FontAwesome>
            </TouchableOpacity>
          ),
          headerLeft: (<View/>)
        };
      };

    render() {
        return (
            <View style={styles.container}>
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
    notificationIcon: {
        color: "#f7b731",
        fontSize: 25,
        marginRight: 10,
        alignSelf: 'flex-start'
      }
});