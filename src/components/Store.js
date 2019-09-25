import React from 'react';
import { books } from '../books';
import Book from './Book';

class Store extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.setState({books: [...books]})
  }

  render() {
    return (
    <div>
      <h1>Store</h1>

      <div className="book-list">
        {this.state.books.map(book => <Book book={book} key={book.id} />)}
      </div>
    </div>
    )
  }
}

export default Store;
