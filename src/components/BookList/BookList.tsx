import React from "react";
import { IBook } from "../../types/types";
import { BookItem } from "../BookItem/BookItem";
import classes from "./BookList.module.css";

interface BookListProps {
    books: IBook[]
}

export const BookList: React.FC<BookListProps> = ({books}) => {
    return (
        <div className={classes.BookListDiv}>
            {books.map((book, index) => 
                <BookItem key={index} book={book} />
            )}
        </div>
    )
}
