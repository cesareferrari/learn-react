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

  render () {
    return (
      <div className="App">
        <h1>Shopping list</h1>
        <GroceryList groceries={this.state.groceries} />
      </div>
    );
  }
}

export default App;
