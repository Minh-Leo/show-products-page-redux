import { SET_PRODUCTS, GET_SEARCH_QUERY, LOADING_DATA } from '../redux/types';
import productReducer from '../redux/reducers/productReducer';

describe('Products Reducer', () => {
  it('Should return default state', () => {
    const newState = productReducer(undefined, {});
    expect(newState).toEqual({ loading: false, products: [], query: '' });
  });

  it('Should set loading if receiving LOADING_DATA type', () => {
    const newState = productReducer(undefined, {
      type: LOADING_DATA,
    });
    expect(newState.loading).toEqual(true);
  });
  it('Should return products if receiving SET_PRODUCTS type', () => {
    const products = [{ name: 'Test 1' }, { name: 'Test 2' }];
    const newState = productReducer(undefined, {
      type: SET_PRODUCTS,
      payload: products,
    });
    expect(newState.products).toEqual(products);
    expect(newState.loading).toEqual(false);
  });
  it('Should return query if receiving GET_SEARCH_QUERY type', () => {
    const query = 'testing';
    const newState = productReducer(undefined, {
      type: GET_SEARCH_QUERY,
      payload: query,
    });
    expect(newState.query).toEqual('testing');
    expect(newState.products).toEqual([]);
  });
});
