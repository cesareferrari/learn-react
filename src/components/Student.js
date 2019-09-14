import React from 'react';
import StudentImage from './StudentImage';

const Student = props => {
  return (
    <div className="student">
    <h3>{props.student.name}</h3>

    <StudentImage
      photoUrl={props.student.photo_url}
      alt={props.student.name}
    />

    <p>
      Age: {props.student.age}
      <br />
      Likes: {props.student.bestIn}
    </p>
      
    </div>
  )
}

export default Student;
