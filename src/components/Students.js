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
      age: '',
      photoUrl: '',
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
      age: this.state.age,
      photoUrl: this.state.photoUrl,
      bestIn: this.state.bestIn 
    }

    this.setState({
      students: [...this.state.students, newStudent],
      name: '',
      age: '',
      photoUrl: '',
      bestIn: ''
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

      <form>

        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="age"
          value={this.state.age}
          placeholder="age"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="photoUrl"
          value={this.state.photoUrl}
          placeholder="Photo"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="bestIn"
          value={this.state.bestIn}
          placeholder="Likes"
          onChange={this.changeHandler}
        />

        <button onClick={this.addStudentHandler}>Add student</button>
      </form>


      </div>
    )
  }
}


export default Students;
