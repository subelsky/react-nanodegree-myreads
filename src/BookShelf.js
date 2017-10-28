import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
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
        {books.map((book,idx) => (
          <Book key={idx} book={book} onChange={this.props.onChange}/>
        ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default BookShelf
