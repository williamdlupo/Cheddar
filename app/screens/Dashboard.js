import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

export default class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("DateSelect")}>
          <FontAwesome style={styles.notificationIcon}>
            {Icons.bell}
          </FontAwesome>
        </TouchableOpacity>
      ),
      headerLeft: <View />
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Greeting Text</Text>
          {/* Perhaps top most container will display an area chart of the user's net worth over time? This would require the API to "poll" a user's net worth over time*/}
          {/* top most container will display greeting and component displaying progress for top 4 budget categories
            - will navigate on press to screen displaying all budget category progress */}

          {/* Second container will display progress for top goal
            - will also navigate on press to all goal progress screen  */}

          {/* Final container will display stacked bar graph of spending with dates and categories on each date*/}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black"
  },
  notificationIcon: {
    color: "#f7b731",
    fontSize: 25,
    marginRight: 10,
    alignSelf: "flex-start"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start"
  },
  heading: {
    justifyContent: "center",
    flexDirection: "row",
    color: "white",
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
});
