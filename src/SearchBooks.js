import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (newQuery) => {
    this.setState({ query: newQuery.trim() })
    const query = this.state.query

    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ books: [] })
          console.warn(books.error)
        } else {
          this.setState({ books })
        }
      })
    }
  }

  render() {
    let { books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book,idx) => (
              <Book key={idx} book={book} onChange={this.props.onChange} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
