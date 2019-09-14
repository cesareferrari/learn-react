import React from 'react';
import '../index.css';
import Student from './Student';


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

class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      students
    }
  }

  render() {
    return (
      <div className="student-list">
        <h2>Students</h2>

        {this.state.students.map(student => {
          if (student.name === 'Alan') { 
            return (
              <Student
                className="alan"
                student={student}
                key={student.name}
              />) }
          return (
            <Student
              student={student}
              key={student.name}
            />) 
        })}

      </div>
    )
  }
}

export default Students;
