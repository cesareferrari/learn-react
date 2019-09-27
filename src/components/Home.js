import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Home = props => {

  const routeToShop = e => {
    e.preventDefault();
    props.history.push('/store')
  }

  return (
    <div>
      <h1>Welcome to the Learn React application</h1>

      <p>Visit the various sections of this application:</p>

      <div className="sections">
          <Link to="/store" >Store</Link>
          <Link to="/todos" >Todos</Link>
          <Link to="/groceries" >Groceries</Link>
          <Link exact to="/pokemons" >Pokemons</Link>
          <Link exact to="/jobs" >Jobs</Link>
          <Link exact to="/dogs" >Dogs</Link>
          <Link exact to="/users" >Users</Link>
          <Link exact to="/styling" >Styling</Link>
      </div>


      <Button onClick={routeToShop}>Shop now</Button>
    </div>
  )
}

export default Home;
