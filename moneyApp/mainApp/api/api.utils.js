import axios from 'axios';

import {GET_ERRORS, GET_TRANSACTIONS} from './api.types';

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
