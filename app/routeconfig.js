import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Provider } from "react-redux";

import SignIn from "./screens/SignIn";
import VerifyEmail from "./screens/VerifyEmail";
import AccountSync from "./screens/AccountSync";
import PlaidLink from "./screens/PlaidLink";
import Dashboard from "./screens/Dashboard";
import Transactions from "./screens/Transactions";
import Profile from "./screens/Profile";

const headerStyle = {
  backgroundColor: "black"
};

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerVisible: false,
      headerStyle
    }
  }
});

export const HomeTabs = createBottomTabNavigator(
  {
    Transactions: {
      screen: Transactions,
      title: "Spending",
      navigationOptions: {
        tabBarLabel: "Spending"
      }
    },
    Dashboard: {
      screen: Dashboard,
      title: "Cheddar!",
      navigationOptions: {
        tabBarLabel: "Dashboard"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    tabBarOptions: {
      activeTintColor: "white",
      labelStyle: {
        fontSize: 18
      },
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "black"
      }
    }
  }
);

export const Verify = createStackNavigator({
  VerifyEmail: {
    screen: VerifyEmail,
    navigationOptions: {
      headerVisible: false,
      headerStyle
    }
  }
});

export const AuthenticatedStack = createStackNavigator(
  {
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
    },
    Home: {
      screen: HomeTabs,
      navigationOptions: {
        headerStyle,
        headerTintColor: "#f7b731"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export const createRootNavigator = (
  signedIn = false,
  verified = false,
  hasAccounts = false
) => {
  return createSwitchNavigator(
    {
      Authenticated: {
        screen: AuthenticatedStack
      },
      SignedOut: {
        screen: SignedOut
      },
      Verify: { screen: Verify },
      AccountSync: { screen: AccountSync }
    },
    {
      initialRouteName: signedIn
        ? verified
          ? hasAccounts
            ? "Authenticated"
            : "AccountSync"
          : "Verify"
        : "SignedOut"
    }
  );
};
