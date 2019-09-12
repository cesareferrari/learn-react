import React from 'react';
import '../index.css';
import StudentTwo from './StudentTwo';


const students = [
  {
    name: 'Carol',
    age: 20,
    photo: '',
    bestIn: 'Math'
  },
  {
    name: 'Alan',
    age: 22,
    photo: '',
    bestIn: 'English'
  },
  {
    name: 'Mary',
    age: 19,
    photo: '',
    bestIn: 'Math, Social studies'
  }
]

const Students = () => {
  return (
    <div className="student-list">
      <h2>Students</h2>

      <StudentTwo student={students[0]} />
      <StudentTwo student={students[1]} />
      <StudentTwo student={students[2]} />
    </div>
  )
}

export default Students;
