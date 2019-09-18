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


    { /* <button onClick={(event) => { props.clearPurchased(event) }} > */ }


    <button onClick={props.clearPurchased}>
      Clear Purchased
    </button>
    </div>
  )
}

export default GroceryList;
