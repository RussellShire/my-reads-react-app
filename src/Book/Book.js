import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({bookTitle, bookAuthors, bookCover}) => {
    return (
        <div className="book">
                        <div className="book-top">
                            <img className="book-cover" src={bookCover} alt={bookTitle} style={{ width: 128, height: 188}}/>
                            <ShelfChanger />
                          </div>
                          <div className="book-title">{bookTitle}</div>
                          <div className="book-authors">{bookAuthors}</div>
                        </div>
    )
}

export default Book
