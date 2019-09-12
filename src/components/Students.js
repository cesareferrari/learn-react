import React from 'react';
import '../index.css';
import StudentThree from './StudentThree';


const students = [
  {
    name: 'Carol',
    age: 20,
    photo_url: 'https://randomuser.me/api/portraits/women/44.jpg',
    bestIn: 'Math'
  },
  {
    name: 'Alan',
    age: 22,
    photo_url: 'https://randomuser.me/api/portraits/men/55.jpg',
    bestIn: 'English'
  },
  {
    name: 'Mary',
    age: 19,
    photo_url: 'https://randomuser.me/api/portraits/women/66.jpg',
    bestIn: 'Math, Social studies'
  }
]

const Students = () => {
  return (
    <div className="student-list">
      <h2>Students</h2>

      <StudentThree student={students[0]} />
      <StudentThree student={students[1]} />
      <StudentThree student={students[2]} />
    </div>
  )
}

export default Students;
