import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice";
import loginSlice from "../reducers/loginReduce"
import sinupRedux from "../reducers/sinupRedux";
import getProductReduce from "../reducers/getProductReduce";

const store = configureStore({
    reducer: {
        products: productReducer,
        login:loginSlice,
        signup:sinupRedux,
        getProduct:getProductReduce
        





    }, 

}); 
export default store;