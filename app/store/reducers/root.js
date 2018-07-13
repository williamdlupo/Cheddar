import {
  STORE_USER,
  GET_USERDOC,
  GET_TRANSACTIONS
} from "../actions/actionTypes";

const initialState = {
  user: null,
  user_doc: null,
  transactions: null
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
    default:
      return state;
  }
};

export default reducer;
