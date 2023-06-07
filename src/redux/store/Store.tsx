import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/ProductSlice';
import loginSlice from '../reducers/loginReduce';
import sinupRedux from '../reducers/sinupRedux';
import getProductReducer from '../reducers/getProductReduce';
import popupReducer from '../reducers/PasswordExpirationReduce'; 

const store = configureStore({
  reducer: {
    products: productReducer,
    login: loginSlice,
    signup: sinupRedux,
    product: getProductReducer,
    passwordExpiration: popupReducer, 
  },
});

export default store;
