import React from 'react';

const User = props => {
  return (
    <div className="user">
      <span>{ props.user.id }</span> 
      <span>{ props.user.name }</span> 
      <span>{ props.user.email }</span> 
    </div>
  )
}

export default User;
