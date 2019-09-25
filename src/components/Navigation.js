import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link exact to="/" >Home</Link>
      <Link to="/store" >Store</Link>
      <Link to="/todos" >Todos</Link>
      <Link to="/groceries" >Groceries</Link>
      <Link exact to="/jobs" >Jobs</Link>
      <Link exact to="/users" >Users</Link>
    </div>
  )
}

export default Navigation;
