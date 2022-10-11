import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({bookId, bookTitle, bookAuthors, bookCover, onSelect}) => {
    return (
        <div className="book">
                        <div className="book-top">
                            <img className="book-cover" src={bookCover} alt={bookTitle} style={{ width: 128, height: 188}}/>
                            <ShelfChanger bookId={bookId} onSelect={(e, bookId) => onSelect(e, bookId)} />
                          </div>
                          <div className="book-title">{bookTitle}</div>
                          <div className="book-authors">{bookAuthors}</div>
                        </div>
    )
}

export default Book
