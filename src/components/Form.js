import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.addStudentHandler}>

    <input
      type="text"
      name="name"
      value={props.name}
      placeholder="Name"
      onChange={props.changeHandler}
    />

    <input
      type="text"
      name="age"
      value={props.age}
      placeholder="Age"
      onChange={props.changeHandler}
    />

    <input
      type="text"
      name="photoUrl"
      value={props.photoUrl}
      placeholder="Photo"
      onChange={props.changeHandler}
    />

    <input
      type="text"
      name="bestIn"
      value={props.bestIn}
      placeholder="Likes"
      onChange={props.changeHandler}
    />

    <button onClick={props.addStudentHandler}>Add student</button>
    </form>
  )
}

export default Form;
