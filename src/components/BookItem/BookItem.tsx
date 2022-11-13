import React from "react";
import classes from "./BookItem.module.css";
import { IBook } from "../../types/types";

interface BookItemProps {
    book: IBook
}

export const BookItem: React.FC<BookItemProps> = ({book}) => (
    <div className={classes.List}>
        <div className={classes.ListImage}>
            <img src={book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail} alt="No image yet"></img>
        </div>
        <div className={classes.ListCategories}>
            <p>{book.volumeInfo.categories}</p>
        </div>
        <div className={classes.ListTitle}>
            <p>{book.volumeInfo.title}</p>
        </div>
        <div className={classes.ListAuthors}>
            <p>{book.volumeInfo.authors}</p>
        </div>
    </div>
)
