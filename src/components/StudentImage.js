import React from 'react';

const StudentImage = props => {
  return (
    <div>
      <img src={props.photoUrl} alt={props.alt} />
    </div>
  )
}

export default StudentImage;
