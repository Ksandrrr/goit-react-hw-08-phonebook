import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice  from "./auth/auth-slice";
import phonebookSlice from "./phonebook/phonebook-slice";
import filterReducer from "./filter/filter-reducer";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice );

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contacts: phonebookSlice,
    filter: filterReducer,
})

export default rootReducer;