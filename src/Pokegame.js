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

//TODO: anytime we are shuffling, we should in big letters in the docstring
// that we are mutating what we are passed

/** Shuffles items (array) returns shuffled items array */

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function calcExpTotal(hand){
  return hand.reduce((total, pokemon) => total + pokemon.base_experience)
}

/** Shows two hands of pokedexes
 *
 * Props:
 * -POKEMONS: array
*/

function Pokegame({ pokemons=POKEMONS }) {
  console.log("*** POKEMONS", POKEMONS)
  const shuffledPokemons = shuffle(POKEMONS);
  console.log("*** SHUFFLED POKEMONS", shuffledPokemons);

  const handOne = shuffledPokemons.slice(0,4);
  const handOneExp = calcExpTotal(handOne);

  const handTwo = shuffledPokemons.slice(4);
  const handTwoExp = calcExpTotal(handTwo);

  return(
    <div>
      <Pokedex pokemons={handOne} isWinner={handOneExp > handTwoExp} />
      <Pokedex pokemons={handTwo} isWinner={handTwoExp > handOneExp}/>
    </div>
  )
}

export default Pokegame;