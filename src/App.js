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
import Items from './components/Items';
import Item from './components/Item';
import ItemForm from './components/ItemForm';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { books } from './books';
import axios from 'axios';



class App extends React.Component {
  state = {
    books,
    items: [],
    errorMessage: '' 
  }

  componentDidMount() {
    axios.get('http://localhost:3333/items')
      .then(response => this.setState({items: response.data}))
      .catch(err => {
        console.log('Axios error:', err);
        this.setState({errorMessage: err.message});
      })
  }


  addItem = (e, item) => {
    e.preventDefault();
    axios.post('http://localhost:3333/items', item)
      .then(res => {
        this.setState({items: res.data});
        this.history.push('/items');
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Router>
        <div className="App">

      { this.state.errorMessage && <h3 className="error"> { this.state.errorMessage } </h3> }

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
            exact
            path="/items"
            render={props => <Items {...props} items={this.state.items} />}
          />

          <Route
            path="/store"
            render={props => <Store {...props} books={this.state.books} />}
          />

          <Route path="/books/:id" component={Book} /> 
          <Route path="/items/:id" render={props => <Item {...props} items={this.state.items} />} />

          <Route
            path="/item-form"
            render={props => <ItemForm {...props} addItem={this.addItem} />}
          />

        </div>
      </Router>
    );
  }
}

const AppWithRouter = withRouter(App);

export default App;
// export default AppWithRouter;
