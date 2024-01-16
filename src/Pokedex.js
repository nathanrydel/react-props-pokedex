import React from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css"

/** Returns a Pokedex component
 * with Pokecard from pokemons array as prop:
 *
 * Prop:
 * -pokemons: Array
 *
 */

// TODO: destructure id, name, type, base_experience from pokemon

function Pokedex({ pokemons, isWinner }) {
  const winnerMessage = isWinner ? <p>THIS HAND WINS!</p> : null

  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>

      <div className="Pokecard-container">
        {pokemons.map(pokemon =>
          (<Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />))
        }
      </div>

      { winnerMessage }
    </div>
  );
}

export default Pokedex;