import axios from 'axios';

import {GET_TRANSACTIONS} from './api.types';

export const getTransactions = () => async dispatch => {
  try {
    const res = await axios.get(`http://10.0.2.2:3000/showAllTrx`);
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: console.log(e),
    });
  }
};
