import React from "react";
import Pokedex from "./Pokedex";

const POKEMONS = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
];


/** Shuffles items: (array) IN PLACE and returns MUTATED items array */

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

/**
 * Calculate the sum of experience in a hand
 * @param {Array} hand - a deck of Pokecards
 * @returns {Number} - The sum of the base_experience of Pokecards array
 */

function calcExpTotal(hand){
  return hand.reduce((total, pokemon) => total + pokemon.base_experience, 0)
}

/** Shows two hands of pokedexes
 *
 * Props:
 * -POKEMONS: array
*/

function Pokegame({ pokemons=POKEMONS }) {
  const shuffledPokemons = shuffle(pokemons);

  const hand1 = shuffledPokemons.slice(0,4);
  const exp1 = calcExpTotal(hand1);

  const hand2 = shuffledPokemons.slice(4);
  const exp2 = calcExpTotal(hand2);

  return(
    <div>
      <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1}/>
    </div>
  )
}

export default Pokegame;