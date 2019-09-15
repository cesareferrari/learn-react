import React from 'react';


const StudentForm = props => {
  return (
    <form onSubmit={props.addStudentHandler}>
      <input 
        type="text"
        name="name"
        placeholder="Name"
        value={props.name}
        onChange={props.changeHandler}
      />

      <input 
        type="text"
        name="age"
        placeholder="Age"
        value={props.age}
        onChange={props.changeHandler}
      />

      <input 
        type="text"
        name="photoUrl"
        placeholder="Photo"
        value={props.photoUrl}
        onChange={props.changeHandler}
      />

      <input 
        type="text"
        name="bestIn"
        placeholder="Best in"
        value={props.bestIn}
        onChange={props.changeHandler}
      />

      <button onClick={props.addStudentHandler}>Add Student</button>
    </form>
  )
}

export default StudentForm;
