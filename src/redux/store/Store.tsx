import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/ProductSlice";
import loginSlice from "../reducers/loginReduce"
import sinupRedux from "../reducers/sinupRedux";
import getProductReducer from "../reducers/getProductReduce";

const store = configureStore({
    reducer: {
        products: productReducer,
        login:loginSlice,
        signup:sinupRedux,
        product:getProductReducer
        





    }, 

}); 
export default store;