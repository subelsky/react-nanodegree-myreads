import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => ( 
          <ListBooks />
        )}/>

        <Route exact path='/search' render={() => ( 
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
