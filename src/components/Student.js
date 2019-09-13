import React from 'react';
import StudentImage from './StudentImage';

const StudentThree = props => {
  return (
    <div className={props.className}>
    <h3>{props.student.name}</h3>

    <StudentImage photoUrl={props.student.photo_url} />

    <p>
      Age: {props.student.age}
      <br />
      Likes: {props.student.bestIn}
    </p>
      
    </div>
  )
}

export default StudentThree;
