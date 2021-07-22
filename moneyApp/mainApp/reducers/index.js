import {combineReducers} from 'redux';
import transactions from './transactions.reducer';

const rootReducer = combineReducers({
  transactions: transactions,
});

export default rootReducer;
