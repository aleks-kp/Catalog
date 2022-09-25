import React, { useCallback, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ISearchFormState } from "../../types/types";
import { Select } from "../ui_kit/Select/Select";
import { Spinner } from "../ui_kit/Spinner/Spinner";
import classes from "./SearchForm.module.css";
import { setSelectCategories, setSelectSortBy, selectRequest, buttonClicked } from './SearchFormSlice'
import axios from "axios";
import { AppDispatch } from "../../store/store";
import { searchFormSlice } from "./SearchFormSlice"



export const SearchForm: React.FC = () => {
 

        const { isLoading, requestText, sortBy, categories } = useAppSelector(state => state.search)
        const dispatch = useDispatch();

        const inputText = useRef<HTMLInputElement>(null)

        const fetchBooks = (requestText: string, categories: string, sortBy: string) => async (dispatch: AppDispatch) => {
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
            
            }

        const handleButtonClick = useCallback(() => {
                dispatch(buttonClicked(true))
                dispatch(fetchBooks(requestText, categories, sortBy));
        }, [dispatch, requestText, categories, sortBy])

        const handleSelectSortBy = useCallback((event : { target: { value: string; }; }) => {
                dispatch(setSelectSortBy(event.target.value))
        }, [dispatch, sortBy])

        const handleSelectCategories = useCallback((event: { target: { value: string; }; }) => {
                dispatch(setSelectCategories(event.target.value))
        }, [dispatch, categories])

        const handleInputRequest = useCallback((event: { target: { value: string; }; }) => {
                dispatch(selectRequest(event.target.value))
        }, [dispatch, requestText])       

        useMemo (() => {
                dispatch(fetchBooks(requestText, categories, sortBy))
        }, [categories, sortBy])


        return (
                <div className={classes.Catalog}>
                        <div className={classes.Title}>
                                <h1>Search for books</h1>
                        </div>
                        <div className={classes.SearchInput}>
                                <input
                                        type="text" 
                                        placeholder="js"
                                        ref={inputText}
                                        onChange={handleInputRequest}
                                />
                                <button
                                        onClick={handleButtonClick}
                                        >
                                </button>
                        </div>
                        <div className={classes.SearchInput}>
                                <div className={classes.SelectDiv}>
                                        <label htmlFor="сategories">
                                                <span>Categories</span>
                                        </label>
                                        <Select 
                                                value={"сategories"} 
                                                id={'сategories'} 
                                                options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']} 
                                                onChange={handleSelectCategories}
                                        />
                                </div>
                                <div className={classes.SelectDiv}>
                                        <label htmlFor="sort">
                                                <span>Sorting by</span>
                                        </label>
                                        <Select 
                                                value={"sort"} 
                                                id={'sort'} 
                                                options={['relevance', 'newest']} 
                                                onChange={handleSelectSortBy}
                                        />
                                </div>
                        </div>
                        <div className={classes.Spinner}>
                        {
                                isLoading === true ?
                                <Spinner />
                                : null
                        }    
                        </div>
                </div>
        )
}
