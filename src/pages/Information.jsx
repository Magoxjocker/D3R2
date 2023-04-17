import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CardPokemoninfo from '../components/CardPokemoninfo'


const Information = () => {
  const location = useLocation()

  return (
    <div>
      <CardPokemoninfo pokemon={location.state?.pokemon}/>
    </div>
  )
}

export default Information