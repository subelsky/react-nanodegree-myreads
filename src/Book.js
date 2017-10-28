import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array,
      imageLinks: PropTypes.object
    })
  }

  render() {
    let { title, authors, imageLinks } = this.props.book

    if (authors) {
      authors = authors.join(', ')
    }

    let coverUrl = ''

    if (imageLinks) {
      const thumbnailUrl = imageLinks.thumbnail
      coverUrl = `url("${thumbnailUrl}")`
    }

    return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: coverUrl }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
    )
  }
}

export default Book
