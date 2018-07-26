import { createStackNavigator } from "react-navigation";

import DateSelect from "../screens/DateSelect";
import Calendar from "../components/CalendarList";
import Transactions from "../screens/Transactions";

export default (TransactionsStack = createStackNavigator(
  {
    Transactions: {
      screen: Transactions,
      navigationOptions: {
        title: "Spending",
        headerTitleStyle: {
          flex: 1,
          fontSize: 25
        },  
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#f7b731"
      }
    },
    DateSelect: {
      screen: DateSelect,
      navigationOptions: {
        title: "Date Select",
        headerTitleStyle: {
          textAlign: "center",
          flex: 1
        },
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
    initialRouteName: "Transactions"
  }
));
