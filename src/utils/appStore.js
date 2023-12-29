import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlice';

// Reducers import
const appStore = configureStore(
    {
        reducer: {
            user: userReducer
        }
    }
)

export default appStore;