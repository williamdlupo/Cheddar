import { createStackNavigator } from "react-navigation";

import DateSelect from "../screens/DateSelect";
import Calendar from "../components/CalendarList";
import Transactions from "../screens/Transactions";

export default (TransactionsStack = createStackNavigator(
  {
    Transactions: {
      screen: Transactions,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#f7b731"
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
    initialRouteName: "Transactions"
  }
)); 
