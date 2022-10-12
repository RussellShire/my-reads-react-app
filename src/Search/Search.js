import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from '../Book/Book'
import searchTerms from './searchTerms';

function Search( { onSelect }){
    const [searchBooks, setSearchBooks] = useState([])

    async function onChange(searchInput) {
        // Checks that search terms are valid based on the limitations of the API
        let validInput = searchTerms.map(term => term.toLowerCase().startsWith(searchInput.toLowerCase())).includes(true)
        
        if(searchInput === ''){
            validInput = false
        } // Stops error on deleting search input

        if(validInput){
            const matchingBooks = await search(searchInput)
            const searchResult = [] 

            console.log(await matchingBooks)

            await matchingBooks
            .forEach(book => {
                if(book.id && book.title && book.authors && book.imageLinks ){ // Required because some parts of the API are incomplete
                searchResult.push({
                    bookId: book.id,
                    title: book.title, 
                    authors: book.authors,
                    cover: book.imageLinks.thumbnail,
                    shelf: book.shelf
                })
            }})
            
            setSearchBooks(searchResult)
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchBooks.map(book => {
                        return ( 
                            <li key={book.bookId}>
                                <Book
                                    bookId={book.bookId}
                                    bookTitle={book.title}
                                    bookAuthors={book.authors} //This needs making a bit nicer to look at for multiple authors
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

export default Search
