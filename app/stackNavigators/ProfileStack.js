import { createStackNavigator } from "react-navigation";

import AccountSync from "../screens/AccountSync";
import PlaidLink from "../screens/PlaidLink";
import Profile from "../screens/Profile";

export default (ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#f7b731"
      }
    },
    Accounts: {
      screen: AccountSync,
      navigationOptions: {
        title: "Synced Accounts",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#f7b731"
      }
    },
    PlaidLink: {
      screen: PlaidLink,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#f7b731"
      }
    }
  },
  {
    initialRouteName: "Profile"
  }
));
