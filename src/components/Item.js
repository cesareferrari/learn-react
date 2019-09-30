import React from 'react';
import axios from 'axios';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items
    }
  }

  render() {

    //const book = books.find(book => `${book.id}` === props.match.params.id);

    const item = this.props.items.find(item => `${item.id}` === this.props.match.params.id)
    console.log('this.props.items', this.props.items);
    console.log('id', this.props.match.params.id);
    console.log('item', item);
    return(
      <div>
        <h2>{ item.name }</h2>
        <p>{item.description}</p>
      </div>
    )
  }
}

export default Item;


{/*
    
name
id
price
imageUrl:
description:
shipping:

*/}
