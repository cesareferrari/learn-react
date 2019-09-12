import React from 'react';

const StudentTwo = props => {
  return (
    <div>
      <h3>{props.student.name}</h3>
      <p>Best in: {props.student.bestIn}</p>
    </div>
  )
}

export default StudentTwo;
