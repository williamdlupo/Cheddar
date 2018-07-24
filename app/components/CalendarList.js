import React, { Component } from "react";

import { connect } from "react-redux";
import {
  getTransactions,
  storeStartDate,
  storeEndDate
} from "../store/actions/actionBundle";
import { CalendarList } from "react-native-calendars";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      start_date: null,
      end_date: null
    };
  }

  render() {
    const itemId = this.props.navigation.getParam("key");
    const start = (
      <CalendarList
        current={this.props.start_date}
        onDayPress={day => this.onSelect(day, itemId)}
        showScrollIndicator={true}
        markedDates={{
          [this.props.start_date]: {
            selected: true,
            selectedColor: "#05c46b"
          }
        }}
      />
    );
    const end = (
      <CalendarList
        current={this.props.end_date}
        onDayPress={day => this.onSelect(day, itemId)}
        showScrollIndicator={true}
        markedDates={{
          [this.props.end_date]: {
            selected: true,
            selectedColor: "#05c46b"
          }
        }}
      />
    );
    return this.props.navigation.getParam("key") == "start" ? start : end;
  }
  onSelect = async (day, itemId) => {
    this.getTransactions(day, itemId);
  };

  async getTransactions(day, itemId) {
    try {
      const start_date =
        itemId == "start" ? day.dateString : this.props.start_date;
      const end_date = itemId == "end" ? day.dateString : this.props.end_date;

      let response = await fetch(
        "https://projectsenti-api.azurewebsites.net/api/GetTransactions/trans/?code=KlaWFrSVQpxw6gLhFxYimImWoZZWNnpEH5CQ1QyWl2frnfjHUdyF2w==",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uid: this.props.user.uid,
            account_id: this.props.account_id,
            start_date: start_date,
            end_date: end_date
          })
        }
      );
      let responseJson = await response.json();
      let trans = await this.props.onGetTransactions(responseJson.transactions);
      let dates = itemId == "start"
        ? this.props.onStoreSDate(day.dateString)
        : this.props.onStoreEDate(day.dateString);
      this.setState({ selected_date: day.dateString });
      return dates;
    } catch (ex) {
      console.log("parsing failed", ex);
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.reducer.user,
    user_doc: state.reducer.user_doc,
    transactions: state.reducer.transactions,
    account_id: state.reducer.account_id,
    start_date: state.reducer.start_date,
    end_date: state.reducer.end_date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTransactions: transactions => dispatch(getTransactions(transactions)),
    onStoreSDate: start_date => dispatch(storeStartDate(start_date)),
    onStoreEDate: end_date => dispatch(storeEndDate(end_date))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
