import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { searchReducer } from '../components/SearchForm/SearchFormSlice'

const rootReducer = combineReducers ({
  search: searchReducer,
})

export const store = configureStore({
  reducer: rootReducer
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch