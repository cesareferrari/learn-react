import React from 'react';
import '../index.css';
import Student from './Student';


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
      age: null,
      photoUrl: '',
      bestIn: ''
    }
  }

  changeHandler = event => {
    // console.log(e);
   //  console.log(e.target); 
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  addStudentHandler = event => {
    event.preventDefault();

    let newStudent = {
      name: this.state.name,
      age: this.state.age,
      photoUrl: this.state.photoUrl,
      bestIn: this.state.bestIn
    }

    this.setState(
      {
        students: [...this.state.students, newStudent]
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Students</h2>

        <div className="student-list">
        {this.state.students.map(student => {
          return (
            <Student
              student={student}
              key={student.name}
            />) 
        })}
        </div>

        <form>

          <input
            type="text"
            value={this.state.name}
            placeholder="name"
            name="name"
            onChange={this.changeHandler}
          />

          <input
            type="text"
            value={this.state.age}
            placeholder="age"
            name="age"
            onChange={this.changeHandler}
          />

          <input
            type="text"
            value={this.state.photoUrl}
            placeholder="photo Url"
            name="photoUrl"
            onChange={this.changeHandler}
          />

          <input
            type="text"
            value={this.state.bestIn}
            placeholder="best In"
            name="bestIn"
            onChange={this.changeHandler}
          />

        <button onClick={this.addStudentHandler}>Add Student</button>
        </form>

      </div>
    )
  }
}

export default Students;
