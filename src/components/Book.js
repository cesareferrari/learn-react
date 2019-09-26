import React from 'react';
import { books } from '../books';
import { Route, Link } from 'react-router-dom';
import BookDescription from './BookDescription';
import BookShipping from './BookShipping';

const Book = props => {
  const book = books.find(book => `${book.id}` === props.match.params.id);

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <img src={book.image_url} alt={book.title} />
      <span className="price">$ {book.price}</span>


    <nav className="book-nav">
      <Link to={`/books/${book.id}`}>Description</Link>  
      <Link to={`/books/${book.id}/shipping`}>Shipping</Link>
    </nav>


      <Route
        exact={true}
        path="/books/:id"
        render={props => <BookDescription {...props} book={book} />}
      />

      <Route
        path="/books/:id/shipping"
        render={props => <BookShipping {...props} book={book} />}
      />

    </div>
  )
}

export default Book;
