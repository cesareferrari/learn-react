import React from 'react';

const GroceryItem = props => {
  return (
    <div
      className={ `item${props.item.purchased ? ' purchased' : ''}` }
      onClick={ () => {props.toggleItem(props.item.id)} } 
    >
    {
      props.item.name
    }

    </div>
  )
}

export default GroceryItem;
