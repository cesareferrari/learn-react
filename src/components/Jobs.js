import React from 'react';
import Job from './Job';
import JobForm from './JobForm';

const jobList = [
  {
    id: 1,
    name: "Contractor",
    description: "Build stuff"
  },
  {
    id: 2,
    name: "Cook",
    description: "Cook stuff"
  },
  {
    id: 3,
    name: "Driver",
    description: "Drive machines"
  },
]

class Jobs extends React.Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    this.setState({jobs: jobList})
  }

  addJob = job => {
    console.log('Adding job');
    console.log('Job:', job);

    let id = Date.now();
    let newJob = { ...job, id };
    console.log('New job:', newJob);
    this.setState({jobs: [...this.state.jobs, newJob]});
  }

  remove = id => {
    this.setState({jobs: this.state.jobs.filter(job => job.id !== id) })
  }

  render() {
    return (
      <div className="jobs-container">
        <h2>Jobs</h2>
        <div className="job-list">
        { this.state.jobs.map(job => {

          return (
            <Job
              job={job}
              key={job.id}
              remove={this.remove}
            />
          )}


          )
        }
        </div>

        <JobForm addJob={this.addJob} />
      </div>
    )
  }
}

export default Jobs;
