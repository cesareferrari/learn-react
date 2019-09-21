import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = props => {
  console.log('Pokemon render called.')
  return (
    <div>
      Id: {props.pokemon.id}
      <br />
      Name: {props.pokemon.name}
      <br />
      Base Stamina: {props.pokemon.base_stamina}
      <br />
      Base defense: {props.pokemon.base_defense}
    </div>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    base_stamina: PropTypes.number,
    base_defense: PropTypes.number,
  })
}

export default Pokemon;
