import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf/Shelf'
import './App.css'

function BooksApp () {
  const [showSearchPage, setShowSearchPage] = useState(false)
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [shelf, setShelf] = useState('');

    useEffect(() => {
        setIsLoading(true)
        async function shelfBooks(){
            const allBooks = await BooksAPI.getAll()

            const shelfBooks = [] 

            await allBooks
            // .filter(book => book.shelf === shelfId)
            .map(book => shelfBooks.push({
                    bookId: book.id,
                    title: book.title, 
                    authors: book.authors,
                    cover: book.imageLinks.thumbnail,
                    shelf: book.shelf
                }))
            // console.log(allBooks)
            setBooks(shelfBooks)
            setIsLoading(false)
            console.log('api fired')
        }
        shelfBooks()
    }, [shelf]);

    async function onChange(e, bookId){
        
        const book = {id: bookId}
        await BooksAPI.update(book, e)
        
        setShelf(e)
    }

    return (
      <div className="app">
        {showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => setShowSearchPage(false)}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf shelfName='Currently Reading' shelfId='currentlyReading' onSelect={(e, bookId) => onChange(e, bookId)} books={books}/>
                <Shelf shelfName='Want To Read' shelfId='wantToRead' onSelect={(e, bookId) => onChange(e, bookId)} books={books}/>
                <Shelf shelfName='Read' shelfId='read' onSelect={(e, bookId) => onChange(e, bookId)} books={books}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => setShowSearchPage(true)}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }


export default BooksApp
