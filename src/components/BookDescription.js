import React from 'react';

export default ( props ) => {
  console.log('Render BookDescription');
  console.log('props.book:', props.book);

  return (
    <div>
      <p className="book-description">{props.book.description}</p>
    </div>
  )
}
