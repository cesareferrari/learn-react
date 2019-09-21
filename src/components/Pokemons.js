import React from 'react';
import Pokemon from './Pokemon';
import pokemonData from '../pokemonData'

import PropTypes from 'prop-types';

class Pokemons extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [] 
    }
  }

  componentDidMount() {
    this.setState({pokemons: pokemonData});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokemons !== this.state.pokemons) {
      console.log('pokemons state has changed.')
    }
  }

  render() {
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
