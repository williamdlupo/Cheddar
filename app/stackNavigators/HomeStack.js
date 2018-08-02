import { createStackNavigator } from "react-navigation";

import Dashboard from "../screens/Dashboard";

export default (HomeStack = createStackNavigator(
  {
    Home: {
      screen: Dashboard,
      navigationOptions: {
        title: "Cheddar",
        headerTitleStyle: {
          textAlign: "center",
          flex: 1,
          fontSize: 25,
        },  
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#f7b731"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
));
