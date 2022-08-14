/* import axios from "axios";
import { AppDispatch } from "../../store/store";
import { searchFormSlice } from "./SearchFormSlice";

export const fetchBooks = (requestText: string, categories: string, sortBy: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(searchFormSlice.actions.bookFetching())
        if (categories === 'all') {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + requestText + '&orderBy=' + sortBy + '&key=AIzaSyCL_VRuLFQ_gQVsDfwr4hazZ3J2n4LjC04')
            dispatch(searchFormSlice.actions.bookFetchingSuccess(response.data))
        } else {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + requestText + '+subject:' + categories + '&orderBy=' + sortBy + '&key=AIzaSyCL_VRuLFQ_gQVsDfwr4hazZ3J2n4LjC04')
            dispatch(searchFormSlice.actions.bookFetchingSuccess(response.data))
        }
        
    } catch (error) {
        dispatch(searchFormSlice.actions.bookFetchingError(error.message))
    }

} */