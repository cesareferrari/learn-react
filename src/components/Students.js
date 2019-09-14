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
      students,
      name: ''
    }
  }

  changeHandler = e => {
    // console.log(e); // prints out the Syntetic event generated when input changes
   //  console.log(e.target); // prints out the event target, which is the input field.
    console.log(e.target.value);
    this.setState({ name: e.target.value });
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
        </form>

      </div>
    )
  }
}

export default Students;
