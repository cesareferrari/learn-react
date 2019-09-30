import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = props => {
  return (
    <div>
      { props.item.name }

      <Link to={`/items/${props.item.id}`} >View</Link>
    </div>
  )
}

export default ItemCard;
