# MY READS REACT APP

This is an app that allows users to track books they're reading, want to read and have finished reading. It was adapted from a assessment project on Udacity's React Fundamentals course.

# Project Specifications

- There are shelves where users can place books
- Books can be moved between shelves
- Books can be removed entirely
- There is a search page where users can find new books (from a server provided by Udacity - see notes below for functionality)
- Users can add books to a shelf directly from search page
- React Router will be used to create a single page application where the back button works in browser

<!-- ## Scoping

There are books, they are objects that have properties such as cover, title, author and shelf. Shelf can be assigned and reassigned by the user. Book objects are stored in a database.

There are shelves, shelves are components that display books assigned by the user. Component that has a name and shelf id. Displays books that are found from the server by mapping and filtering book info onto a book component.

There is a search function that allows users to find books and assign them to shelves. This should update the book object on the database and be instantly reflected on the shelves. When searching the shelf should be displayed, this will not come from the database and will need to be joined up. There are limited search terms, predictive autofill would be nice UX. -->

### Still To Do:

- Multiple author name layout (including in search)
- Add shelf status to Search results, make this update live on search page
- Fix all shelves reloading when books move
- Use useContext to avoid prop drilling (see Dev Ed Video)

# Credit

This project was built from the starter template for the final assessment project for Udacity's React Fundamentals course. Tthis template provided a static example of the CSS and HTML markup, but without any of the React code needed to complete the project.

## Usage

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server Instructions

Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
