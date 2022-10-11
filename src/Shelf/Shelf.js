import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';
import * as BooksAPI from '../BooksAPI'

function Shelf({ shelfName, shelfId }){
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function shelfBooks(){
            const allBooks = await BooksAPI.getAll()

            const shelfBooks = [] 

            await allBooks
            .filter(book => book.shelf === shelfId)
            .map(book => shelfBooks.push({
                    bookId: book.id,
                    title: book.title, 
                    authors: book.authors,
                    cover: book.imageLinks.thumbnail
                }))
            console.log(allBooks)
            setBooks(shelfBooks)
            setIsLoading(false)
        }
        shelfBooks()
    }, []);

    console.log(books[0])
        
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {isLoading ? 'loading' : books.map(book => {
                            return ( 
                                <li key={book.bookId}>
                                    <Book 
                                        bookTitle={book.title}
                                        bookAuthors={book.authors.map(author => author+' ')}
                                        bookCover={book.cover}
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
