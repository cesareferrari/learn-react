import React from 'react';
import Dog from './Dog';

class Dogs extends React.Component {
  state = {
    dogs: [],
    dogText: ''
  }

  componentDidMount() {
    console.log('Dogs CDM called')
    fetch('https://dog.ceo/api/breed/husky/images')
      .then(res => res.json())
      .then(dogs => {
        this.setState({dogs: dogs.message});
      })
      .catch(err => console.log('Error:', err));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Dogs CDU called')

    if (prevState.dogs !== this.state.dogs) {
      console.log('Dogs have changed');
      if (this.state.dogText === 'chihuahua') {
        console.log("It's a chihuahua");
        fetch('https://dog.ceo/api/breed/husky/images')
          .then(res => res.json())
          .then(dogs => {
            this.setState({
              dogs: dogs.message,
              dogText: 'husky'
            })
          })
          .catch(err => console.log('Error:', err));
      }
    }
  }

  handleChanges = e => {
    this.setState({dogText: e.target.value})
  }

  handleFetch = e => {
    e.preventDefault();

    fetch(`https://dog.ceo/api/breed/${this.state.dogText}/images`)
      .then(res => res.json())
      .then(dogs => {
        this.setState({dogs: dogs.message});
      })
      .catch(err => console.log('Error:', err));
  }

  render() {
    return (
      <div>
        <h1>Dogs</h1>

      <form>
        <input
          type="text"
          value={this.state.dogText}
          onChange={this.handleChanges}
        />

      <button onClick={this.handleFetch}>Fetch</button>
      </form>

        <div className="dog-list">
          { this.state.dogs.map(dog => <Dog dog={dog} key={dog} />) }
        </div>
      </div>
    )
  }
}

export default Dogs;
