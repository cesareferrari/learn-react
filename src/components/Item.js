import React from 'react';

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
        <img src={item.imageUrl} alt={item.name} />
        <p>{item.description}</p>
      </div>
    )
  }
}

export default Item;

