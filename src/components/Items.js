import React from 'react';
import ItemCard from './ItemCard.js';
import { Link } from 'react-router-dom';

class Items extends React.Component {

  render() {
    return (
      <div>
        <h1>Items</h1>
        { this.props.items.map(item => <ItemCard item={item} key={item.id} /> ) }


        <Link to="/item-form">Add a new item</Link>
      </div>
    )
  }
}

export default Items;
