import React from 'react';
import { books } from '../books';

const Book = props => {
  const book = books.find(book => `${book.id}` === props.match.params.id);

  return (
    <div className="book">
      <h2>{book.title}</h2>
      <img src={book.image_url} alt={book.title} />
      <p>{book.description}</p>
      <span className="price">$ {book.price}</span>
    </div>
  )
}

export default Book;
