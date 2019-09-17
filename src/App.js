import React from 'react';
import './App.css';
import GroceryList from './components/GroceryList';

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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries
    }
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

  render () {
    return (
      <div className="App">
        <h1>Shopping list</h1>
        <GroceryList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
