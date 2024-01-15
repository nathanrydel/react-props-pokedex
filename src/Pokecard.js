import React from 'react';


const POKEAPI_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Shows a single Pokemon, with their name, image, and type.
 *
 * Props:
 *  -id: Number
 *  -name: String
 *  -type: String
 *  -base_experience: Number
 */

function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `${POKEAPI_URL}/${id}.png`;
  return (
    <div className="Pokecard">
      <div>{name}</div>
      <img src={imgSrc} />
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
    </div>
  );
}

export default Pokecard;