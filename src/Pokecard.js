import React from 'react';


const POKEAPI_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Shows a single Pokemon, with their name, image, and type.
 *
 * Props:
 *  -id: Number
 *  -name: String
 *  -type: String
 *  -baseExp: Number
 */

function Pokecard({ id, name, type, baseExp }) {
  const imgSrc = `${POKEAPI_URL}/${id}.png`;
  return (
    <div className="Pokecard">
      <div>{name}</div>
      <img src={imgSrc} />
      <div>Type: {type}</div>
      <div>EXP: {baseExp}</div>
    </div>
  );
}

export default Pokecard;