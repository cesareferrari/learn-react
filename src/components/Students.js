import React from 'react';
import '../index.css';
import Student from './Student';
import StudentForm from './StudentForm';


const students = [
  {
    name: 'Carol',
    age: 20,
    photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    bestIn: 'Math'
  },
  {
    name: 'Alan',
    age: 22,
    photoUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
    bestIn: 'English'
  },
  {
    name: 'Mary',
    age: 19,
    photoUrl: 'https://randomuser.me/api/portraits/women/66.jpg',
    bestIn: 'Math, Social studies'
  }
]


class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      students,
      name: '',
      photoUrl: '',
      age: '',
      bestIn: ''
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addStudentHandler = event => {
    event.preventDefault();

    let newStudent = {
      name: this.state.name,
      photoUrl: this.state.photoUrl,
      age: this.state.age,
      bestIn: this.state.bestIn,
    }

    this.setState({
      students: [...this.state.students, newStudent]
    })
  }

  render() {
    return (
      <div>
      <div className="student-list">
      {
        this.state.students.map(student => {
          return <Student student={student} key={student.name} />
        })
      }
      </div>
      <StudentForm
        addStudentHandler={this.addStudentHandler}
        changeHandler={this.changeHandler}
        name={this.state.name}
        age={this.state.age}
        photoUrl={this.state.photoUrl}
        bestIn={this.state.bestIn}
      />


      </div>
    )
  }
}

export default Students;
