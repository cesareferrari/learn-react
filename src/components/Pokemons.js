import React from 'react';
import Pokemon from './Pokemon';

import PropTypes from 'prop-types';

const Pokemons = props => {
  return (
    <div>
      <h1>Pokemon</h1>

      {props.pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
    </div>
  )
}

Pokemons.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default Pokemons;
