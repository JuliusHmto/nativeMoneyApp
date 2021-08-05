import {
  GET_TRANSACTIONS,
  GET_CURRENT_MONTH_TRX,
  GET_LAST_MONTH_TRX,
} from '../api/api.types';

const initialState = {
  transactions: [],
  currMonthTransactions: [],
  lastMonthTransactions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case GET_CURRENT_MONTH_TRX:
      return {
        ...state,
        currMonthTransactions: action.payload,
      };
    case GET_LAST_MONTH_TRX:
      return {
        ...state,
        lastMonthTransactions: action.payload,
      };

    default:
      return state;
  }
}
