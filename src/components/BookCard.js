import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = props => {

  return (
    <div className="book-card">

    <Link to={`/books/${props.book.id}`}>
      <img src={props.book.image_url} alt={props.book.title} />
    </Link>

      <h4>{props.book.title}</h4>

      <span className="price">$ {props.book.price}</span>
    </div>
  )
}

export default BookCard;
