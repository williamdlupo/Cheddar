import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import FontAwesome, { Icons } from "react-native-fontawesome";

import SignIn from "./screens/SignIn";
import VerifyEmail from "./screens/VerifyEmail";
import AccountSync from "./screens/AccountSync";
import PlaidLink from "./screens/PlaidLink";
import Dashboard from "./screens/Dashboard";
import Transactions from "./screens/Transactions";
import Profile from "./screens/Profile";
import DateSelect from "./screens/DateSelect";
import Calendar from "./components/CalendarList";

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
        tabBarLabel: "Spending",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome style={{ color: tintColor, fontSize: 24 }}>
            {Icons.dollar}
          </FontAwesome>
        )
      }
    },
    Dashboard: {
      screen: Dashboard,
      title: "Cheddar!",
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome style={{ color: tintColor, fontSize: 24 }}>
            {Icons.home}
          </FontAwesome>
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome style={{ color: tintColor, fontSize: 24 }}>
            {Icons.userCircle}
          </FontAwesome>
        )
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      animationEnabled: true,
      activeTintColor: "#f7b731",
      iconStyle: {
        fontSize: 20
      },
      labelStyle: {
        fontSize: 18
      },
      tabStyle: {
        width: 100
      },
      activeTabStyle: {
        backgroundColor: "black"
      },
      style: {
        backgroundColor: "black",
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
        headerVisible: false
      }
    },
    DateSelect: {
      screen: DateSelect,
      navigationOptions: {
        title: "Date Select",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#f7b731"
      }
    },
    Calendar: {
      screen: Calendar,
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
