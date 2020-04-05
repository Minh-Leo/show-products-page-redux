import { SET_PRODUCTS, LOADING_DATA } from '../types';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/products')
    .then((res) => {
      dispatch({ type: SET_PRODUCTS, payload: res.data });
    })
    .catch((err) => {
      console.log('Data not set, something went wrong: ', err.message);
    });
};
