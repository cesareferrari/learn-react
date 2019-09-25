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



class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">

          <Navigation />

      
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={TodoList} />
          <Route path="/groceries" component={GroceryList} />
          <Route path="/pokemons" component={Pokemons} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/users" component={Users} />
          <Route path="/styling" component={Styling} />

          <Route path="/store" component={Store} />
          <Route exact path="/books/:id" component={Book} />

        </div>
      </Router>
    );
  }
}

export default App;
