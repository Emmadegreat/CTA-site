import LoginReducer from './auth'
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: { login: LoginReducer }
});

export default Store