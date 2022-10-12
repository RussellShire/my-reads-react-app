import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf/Shelf'
import Search from './Search/Search'
import './App.css'

function BooksApp () {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [shelf, setShelf] = useState('');

  useEffect(() => {
    setIsLoading(true)
    async function shelfBooks(){
      const allBooks = await BooksAPI.getAll()
      const shelfBooks = [] 

      await allBooks
      .map(book => shelfBooks.push({
              bookId: book.id,
              title: book.title, 
              authors: book.authors,
              cover: book.imageLinks.thumbnail,
              shelf: book.shelf
          }))
      setBooks(shelfBooks)
      setIsLoading(false)
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
      <Routes>
        <Route path='/search' element={
          <Search onSelect={(e, bookId) => onChange(e, bookId)} />
        }/>
            
        <Route path='/' element={
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf shelfName='Currently Reading' shelfId='currentlyReading' onSelect={(e, bookId) => onChange(e, bookId)} books={books} isLoading={isLoading}/>
                <Shelf shelfName='Want To Read' shelfId='wantToRead' onSelect={(e, bookId) => onChange(e, bookId)} books={books} isLoading={isLoading}/>
                <Shelf shelfName='Read' shelfId='read' onSelect={(e, bookId) => onChange(e, bookId)} books={books} isLoading={isLoading}/>
            </div>
            <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
        }/>
      </Routes>
    </div>
  )
}

export default BooksApp
