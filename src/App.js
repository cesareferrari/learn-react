import React from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
import Form from './components/Form';
import Users from './components/Users';
import TodoList from './components/TodoList';
import Pokemons from './components/Pokemons';
// import Dogs from './components/Dogs';
import Styling from './components/Styling';

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

  render () {
    return (
      <div className="App">

      {  /* <Dogs /> */ }

        <Styling />

        <Users />

        <h1>Shopping list</h1>
        <GroceryList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />

        <Form addItem={this.addItem} />



      <TodoList todos={this.state.todos} />


      <Pokemons />

      </div>
    );
  }
}

export default App;
