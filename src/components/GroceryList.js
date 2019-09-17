import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = props => {
  return (
    <div className="shopping-list">

    {
      props.groceries.map(item => {
        return (
          <GroceryItem
            item={item}
            key={item.id}
            toggleItem={props.toggleItem}
          />
        )
      })
    }

    </div>
  )
}

export default GroceryList;
