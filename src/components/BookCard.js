import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = props => {

  return (
    <div className="book-card">
      <h4>{props.book.title}</h4>



    <Link to={`/books/${props.book.id}`}>
      <img src={props.book.image_url} alt={props.book.title} />
    </Link>

      <p>{props.book.description}</p>
      <span className="price">$ {props.book.price}</span>
    </div>
  )
}

export default BookCard;
