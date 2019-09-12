import React from 'react';

const StudentThree = props => {
  return (
    <div>
    <h3>{props.student.name}</h3>

    <img src={props.student.photo_url} />

    <p>Age: {props.student.age}</p>
    <p>Likes: {props.student.bestIn}</p>
      
    </div>
  )
}

export default StudentThree;
