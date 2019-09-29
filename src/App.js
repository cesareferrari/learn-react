import React from 'react';
import './App.css';
import GroceryList from './components/GroceryList';
import Users from './components/Users';
import TodoList from './components/TodoList';
import Pokemons from './components/Pokemons';
import Dogs from './components/Dogs';
import Styling from './components/Styling';
import Jobs from './components/Jobs';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Store from './components/Store';
import Book from './components/Book';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { books } from './books';
import axios from 'axios';


class App extends React.Component {
  state = {
    books,
    items: []
  }

componentDidMount() {
  axios.get('http://localhost:3333/items')
    .then(response => this.setState({items: response.data}))
    .catch(err => console.log(err))
}

  render () {
    return (
      <Router>
        <div className="App">

          <Navigation />

      
          <Route exact={true} path="/" component={Home} />
          <Route path="/todos" component={TodoList} />
          <Route path="/groceries" component={GroceryList} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/users" component={Users} />
          <Route path="/styling" component={Styling} />

          <Route
            path="/store"
            render={props => <Store {...props} books={this.state.books} />}
          />

          <Route path="/books/:id" component={Book} /> 

        </div>
      </Router>
    );
  }
}

export default App;
