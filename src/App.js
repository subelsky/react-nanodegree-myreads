import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBook = (changedBook) => {
    this.setState((state) => {
      let bookIndex = state.books.findIndex((b) => { 
        return b.id === changedBook.id
      })

      let newBooks = state.books

      if (bookIndex >= 0) {
        newBooks[bookIndex] = changedBook
      } else {
        newBooks.push(changedBook)
      }

      return { books: newBooks }
    })

    BooksAPI.update(changedBook,changedBook.shelf).then(() => { 
      console.info(`updated '${changedBook.title}' to '${changedBook.shelf}'`)
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => ( 
          <ListBooks 
            books={this.state.books} 
            onChange={this.changeBook}
          />
        )}/>

        <Route exact path='/search' render={() => ( 
          <SearchBooks books={this.state.books} onChange={(e) => { this.changeBook(e) }} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
