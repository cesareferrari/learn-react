import React from 'react';

const Dog = props => {
  return (
    <div className="dog">
      <img alt={props.dog} src={props.dog} />
    </div>
  )
}

export default Dog;
