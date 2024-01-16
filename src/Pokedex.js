import React from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";

/** Returns a Pokedex component
 * with Pokecard from pokemons array as prop:
 *
 * Prop:
 * -pokemons: Array
 *
 */

// TODO: destructure id, name, type, base_experience from pokemon

function Pokedex({ pokemons, exp, isWinner }) {
  const winnerMessage = isWinner ? <p>THIS HAND WINS!</p> : null;

  return (
    <div className="Pokedex">

      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemons.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>

      <h4>Total experience: {exp}</h4>
      {winnerMessage}

    </div>
  );
}


export default Pokedex;