import { combineReducers } from '@reduxjs/toolkit';

import { searchReducer } from '../components/SearchForm/SearchFormSlice';

export const rootReducer = combineReducers({
    search: searchReducer,

}) 

export type RootReducer = ReturnType<typeof rootReducer>