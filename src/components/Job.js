import React from 'react';

const Job = props => {
  return (
    <div className="job">
      <h4>{props.job.name}</h4>
      <p>{props.job.description}</p>
    </div>
  )
}

export default Job;
