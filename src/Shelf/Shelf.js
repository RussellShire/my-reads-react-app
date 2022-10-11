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
                        
                        {/* <li>
                            <Book 
                            bookTitle='To Kill a Mockingbird' 
                            bookAuthors='Harper Lee' 
                            bookCover='http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api' />
                        </li>
                        <li>
                            <Book 
                            bookTitle='Enders Game' 
                            bookAuthors='Orson Scott Card' 
                            bookCover='http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api' />
                        </li> */}
                    </ol>
                </div>
        </div>
    )
}

export default Shelf;
