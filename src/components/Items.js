import React from 'react';
import ItemCard from './ItemCard.js';

class Items extends React.Component {

  render() {
    return (
      <div>
        <h1>Items</h1>
        { this.props.items.map(item => <ItemCard item={item} key={item.id} /> ) }
      </div>
    )
  }
}

export default Items;
