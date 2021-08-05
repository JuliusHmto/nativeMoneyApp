import axios from 'axios';

import {
  GET_ERRORS,
  GET_TRANSACTIONS,
  GET_CURRENT_MONTH_TRX,
  GET_LAST_MONTH_TRX,
} from './api.types';

export const getTransactions = () => async dispatch => {
  try {
    const res = await axios.get(`http://10.0.2.2:3000/showAllTrx`);
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data.values,
    });
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: console.log(e),
    });
  }
};

export const getCurrMonthTrx = () => async dispatch => {
  try {
    const res = await axios.get(`http://10.0.2.2:3000/showCurMonthTrx`);
    dispatch({
      type: GET_CURRENT_MONTH_TRX,
      payload: res.data.values,
    });
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: console.log(e),
    });
  }
};

export const getLastMonthTrx = () => async dispatch => {
  try {
    const res = await axios.get(`http://10.0.2.2:3000/showLastMonthTrx`);
    dispatch({
      type: GET_LAST_MONTH_TRX,
      payload: res.data.values,
    });
  } catch (e) {
    dispatch({
      type: GET_ERRORS,
      payload: console.log(e),
    });
  }
};
