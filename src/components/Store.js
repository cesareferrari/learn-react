import React from 'react';
import BookCard from './BookCard';

class Store extends React.Component {

  render() {
    return (
    <div>
      <h1>Store</h1>

      <div className="book-list">
        {this.props.books.map(book => <BookCard book={book} key={book.id} />)}
      </div>
    </div>
    )
  }
}

export default Store;
