import React from 'react';
import Job from './Job';

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

  render() {
    return (
      <div>
        <h2>Jobs</h2>
        <div className="job-list">

        {
          this.state.jobs.map(job => {
            return <Job job={job} key={job.id} />
          })
        }
        </div>
      </div>
    )
  }
}

export default Jobs;
