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

import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">

          <Navigation />

      
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/groceries" component={GroceryList} />
          <Route exact path="/pokemons" component={Pokemons} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/dogs" component={Dogs} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/styling" component={Styling} />
        </div>
      </Router>
    );
  }
}

export default App;
