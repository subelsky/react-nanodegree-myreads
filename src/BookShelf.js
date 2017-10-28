import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    // quick hack to convert from camelcase to title case
    let titleParts = this.props.title.split(/(?=[A-Z])/)
    const title = titleParts.map((t) => t.replace(/^(\w)/,(s) => s.toUpperCase())).join(' ')

    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book) => (
          <Book 
            key={book.title}
            title={book.title}
            authors={book.authors}
            coverUrl={book.imageLinks.thumbnail} />
        ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default BookShelf
