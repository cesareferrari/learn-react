import React from 'react';
import Pokemon from './Pokemon';
import pokemonData from '../pokemonData'

import PropTypes from 'prop-types';

class Pokemons extends React.Component {
  constructor() {
    console.log('Pokemons constructor called.')
    super();

    this.state = {
      pokemons: [] 
    }
  }

  componentDidMount() {
    console.log('componentDidMount called.');
    this.setState({pokemons: pokemonData});
  }

  componentDidUpdate(prevState, newState) {
    console.log('componentDidUpdate called.');

    if (prevState.pokemons !== newState.pokemons) {
      console.log('pokemons state has changed.')
    }
  }

  render() {
    console.log('render called.');

    return (
      <div>
        <h1>Pokemon</h1>

        {this.state.pokemons.map(pokemon => {
          return <Pokemon pokemon={pokemon} key={pokemon.id} />
        })}
      </div>
    )
  }

}

Pokemons.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default Pokemons;
