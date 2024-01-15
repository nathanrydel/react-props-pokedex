import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(pokemons) {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokecard-container">
        {pokemons.map(pokemon =>
        (<Pokecard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          baseExp={pokemon.base_experience}
        />))}
      </div>
    </div>
  );
}

export default Pokedex;