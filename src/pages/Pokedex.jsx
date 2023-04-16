import React, { useContext } from 'react'
import { MyContext } from '../components/context/MyContext';
import CardPokemon from '../components/CardPokemon';


const Pokedex = () => {

  const { dataPokemon } = useContext(MyContext);

  return (
    <div>

      <div className='Footer bg-dark bg-gradient'>
        <h2 className='text-center text-white p-2'>Pokemon primera Generacion</h2>
      </div>
      <div className='container'>
        {dataPokemon.map((pokemon) => (<CardPokemon key={pokemon.id} pokemon={pokemon} />))}
      </div>
    </div>
  )
}

export default Pokedex
//1.17.47//