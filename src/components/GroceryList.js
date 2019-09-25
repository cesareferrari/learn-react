import React from 'react';
import GroceryItem from './GroceryItem';
import Form from './Form';

const groceries = [
  {
    id: 1,
    name: "bananas",
    purchased: false
  },
  {
    id: 2,
    name: "apples",
    purchased: true
  },
  {
    id: 3,
    name: "milk",
    purchased: false
  },
  {
    id: 4,
    name: "cheese",
    purchased: true
  },
]

class GroceryList extends React.Component {
  state = {
    groceries
  }

  toggleItem = itemId => {
    console.log("itemId: ", itemId);
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          return { ...item, purchased: !item.purchased }
        }

        return item;
      })
    });
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    }

    this.setState({
      groceries: [...this.state.groceries, newItem]
    })
  }

  clearPurchased = event => {
    event.preventDefault();
    this.setState({
      groceries: this.state.groceries.filter(item => !item.purchased)
    })
  }

  render() {
    return (
      <div>
        <h1>Shopping list</h1>
        <div className="shopping-list">

        {
          this.state.groceries.map(item => {
            return (
              <GroceryItem
                item={item}
                key={item.id}
                toggleItem={this.toggleItem}
              />
            )
          })
        }


        { /* <button onClick={(event) => { props.clearPurchased(event) }} > */ }


        <button onClick={this.clearPurchased}>
          Clear Purchased
        </button>
        </div>

        <Form addItem={this.addItem} />

      </div>
    )
  }
}

export default GroceryList;
