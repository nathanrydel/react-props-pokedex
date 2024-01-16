import React from 'react';
import "./Pokecard.css";

const POKEAPI_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Shows a single Pokemon, with their name, image, type, and base experience.
 *
 * Props:
 *  -id: Number
 *  -name: String
 *  -type: String
 *  -base_experience: Number
 */

function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `${POKEAPI_URL}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img src={imgSrc} alt={name} />
      <div className="Pokecard-stats">
        <div>Type: {type}</div>
        <div>EXP: {base_experience}</div>
      </div>
    </div>
  );
}

export default Pokecard;