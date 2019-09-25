import React from 'react';

const Book = props => {
  return (
    <div className="book-card">
      <h4>{props.book.title}</h4>
      <img src={props.book.image_url} alt={props.book.title} />
      <p>{props.book.description}</p>
      <span className="price">$ {props.book.price}</span>
    </div>
  )
}

export default Book;
