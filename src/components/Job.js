import React from 'react';

const Job = props => {
  return (
    <div className="job">
      <h4>{props.job.name}</h4>
      <p>{props.job.description}</p>

      <form className="remove-job" onSubmit={e => {
        e.preventDefault();
        props.remove(props.job.id);
      }}>

        <button>Remove</button>
      </form>
    </div>
  )
}

export default Job;
