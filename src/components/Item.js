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
    const item = this.props.items.find(item => `${item.id}` === this.props.match.params.id)

    return(
      <div>
        <h2>{ item.name }</h2>
      <img src={item.imageUrl} />
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
