import React from 'react';
import Item from './Item.js';

class Items extends React.Component {

  render() {
    return (
      <div>
        <h1>Items</h1>
        { this.props.items.map(item => <Item item={item} /> ) }
      </div>
    )
  }
}

export default Items;
