import React from 'react';
import Book from '../Book/Book';

function Shelf({ shelfName, shelfId, isLoading, books, onSelect }){
    const shelfBooks = books.filter(book => book.shelf === shelfId)
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {isLoading ? 'loading' : shelfBooks.map(book => {
                            return ( 
                                <li key={book.bookId}>
                                    <Book
                                        bookId={book.bookId}
                                        bookTitle={book.title}
                                        bookAuthors={book.authors.map(author => author+' ')} //This needs making a bit nicer to look at for multiple authors
                                        bookCover={book.cover}
                                        onSelect={(e, bookId) => onSelect(e, bookId)}
                                    />
                                </li>
                            )}
                        )}
                    </ol>
                </div>
        </div>
    )
}

export default Shelf;
