import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardPokemon = ({ pokemon }) => {

    const navigate = useNavigate()

    const info = () => {
        navigate(`pokemon/${pokemon.id}`)
    }

    return (
        <div className='card'>
            <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
            <div className='card-info'>
                <h5>{pokemon.name}</h5>
                <button onClick={info} >Informacion</button>
            </div>
        </div>
    )
}

export default CardPokemon