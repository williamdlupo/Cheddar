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

import HomeStack from './stackNavigators/HomeStack';
import TransactionsStack from './stackNavigators/TransactionStack';
import ProfileStack from './stackNavigators/ProfileStack';

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

export const AuthenticatedStack = createBottomTabNavigator(
  {
    Transactions: {
      screen: TransactionsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome style={{ color: tintColor, fontSize: 30 }}>
            {Icons.dollar}
          </FontAwesome>
        )
      }
    },
    Dashboard: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome style={{ color: tintColor, fontSize: 30 }}>
            {Icons.barChartO}
          </FontAwesome>
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome style={{ color: tintColor, fontSize: 30 }}>
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
      showLabel: false,
      animationEnabled: true,
      activeTintColor: "#f7b731",
      iconStyle: {
        fontSize: 20
      },
      labelStyle: {
        fontSize: 17
      },
      tabStyle: {
        width: 100
      },
      activeTabStyle: {
        backgroundColor: "black"
      },
      style: {
        backgroundColor: "black",
        borderTopColor: '#d2dae2',
        borderTopWidth: 1
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
})

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
