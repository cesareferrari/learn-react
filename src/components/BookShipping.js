import React from 'react';

const BookShipping = props => {
  console.log('Render BookShipping');
  console.log('props.book:', props.book);

  return (
    <div>
      <p className="book-shipping">{props.book.shipping}</p>
    </div>
  )
}

export default BookShipping;
