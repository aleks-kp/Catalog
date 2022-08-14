import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import type { IBook } from '../../types/types'

  
  export interface ISearchFormState {
    requestText: string;
    books: IBook[];
    categories: string;
    sortBy: string;
    isLoading: any;
    error: string;
    isClicked: boolean
}

  const initialState: ISearchFormState = {
    requestText: '',
    books: [],
    categories: 'all',
    sortBy: 'relevance',
    isLoading: false,
    error: '',
    isClicked: false,
  }

  export const searchFormSlice = createSlice ({
    name: 'SearchForm',
    initialState,
    reducers: {
/*       setSearchRequest: (state: ISearchFormState, action: PayloadAction<ISearchFormState>) => {
        state.requestText = action.payload.requestText,
        state.isLoading = true
      }, */
      setSearchRequest: (state: ISearchFormState, action: PayloadAction<any>) => {
/*         state.requestText = action.payload.requestText, */
console.log('isLoading Slice' +':' + ' ' + state.isLoading)
console.log('requestText Slice' +':' + ' ' + state.requestText)
console.log('categories Slice' +':' + ' ' + state.categories)
console.log('sortBy Slice' +':' + ' ' + state.sortBy)

        state.isLoading = true
      },
      setBooksArray: (state: ISearchFormState, action: PayloadAction<ISearchFormState>) => {
        state.requestText = '',
        state.books = action.payload.books,
        state.categories = '',
        state.sortBy = ''
      },
      setSelectCategories: (state: ISearchFormState, action: PayloadAction<string>) => {
        state.categories = action.payload
      },
      setSelectSortBy: (state: ISearchFormState, action: PayloadAction<string>) => {
        state.sortBy = action.payload
      },
      selectRequest: (state: ISearchFormState, action: PayloadAction<string>) => {
        state.requestText = action.payload
      },
      bookFetching: (state: ISearchFormState, action: PayloadAction<ISearchFormState>) => {
        state.isLoading = true
      },
      bookFetchingSuccess: (state: ISearchFormState, action: PayloadAction<IBook[]>) => {
        state.isLoading = false;
        state.error = '';
        state.books = [...action.payload.items]
      },
      bookFetchingError: (state: ISearchFormState, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
      },
      buttonClicked: (state: ISearchFormState, action: PayloadAction<boolean>) => {
        state.isClicked = action.payload;
      }
    }
  })

  export const { setSearchRequest, setBooksArray, setSelectCategories, setSelectSortBy, selectRequest, buttonClicked } = searchFormSlice.actions
  export const searchReducer = searchFormSlice.reducer

 
