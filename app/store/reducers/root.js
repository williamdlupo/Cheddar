import moment from "moment";
import {
  STORE_USER,
  GET_USERDOC,
  GET_TRANSACTIONS,
  STORE_ACCOUNT,
  STORE_SDATE,
  STORE_EDATE
} from "../actions/actionTypes";

const initialState = {
  user: null,
  user_doc: null,
  transactions: null,
  account_id: "",
  start_date: moment().add(-1, 'months').format('YYYY-MM-DD'),
  end_date: moment().format('YYYY-MM-DD')
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        user: action.user
      };
    case GET_USERDOC:
      return {
        ...state,
        user_doc: action.doc
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions
      };
      case STORE_ACCOUNT:
      return {
        ...state,
        account_id: action.account_id
      };
      case STORE_SDATE:
      return {
        ...state,
        start_date: action.start_date
      };
      case STORE_EDATE:
      return {
        ...state,
        end_date: action.end_date
      };
    default:
      return state;
  }
};

export default reducer;
