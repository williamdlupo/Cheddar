import { createStackNavigator } from "react-navigation";

import Dashboard from "../screens/Dashboard";

export default (HomeStack = createStackNavigator(
  {
    Home: {
      screen: Dashboard,
      navigationOptions: {
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
