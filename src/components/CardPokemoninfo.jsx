import React from 'react'


const CardPokemoninfo = ({ pokemon }) => {


    return (
        <div className='container'>
                    <div className='card-info'>
            <img src={pokemon?.img} alt="" />
            <div className='row'>
                <div className='col col-title'>nombre</div>
                <div className='col'>{pokemon?.name}</div>
            </div>
            <div className='row'>
                <div className='col col-title'>peso</div>
                <div className='col'>{pokemon?.weight}</div>
            </div>

            <div className='row'>
                <div className='col col-title'>altura</div>
                <div className='col'>{pokemon?.height}</div>
            </div>

            <div className='row'>
                <div className='col col-title'>tipo</div>
                <div className='col'>{pokemon?.types?.map(type =>{ 
                    return (
                        <p>{type.type.name}</p>
                    )
                })}</div>
            </div>
            
            <div className='row'>
                <div className='col col-title'>estadisticas</div>
                <div className='col'>{pokemon?.stats?.map(stat =>{ 
                    return (
                        <p>{stat.stat.name}:{stat.base_stat}</p>
                    )
                })}</div>
            </div>
            
        </div>
        </div>
    )
}

export default CardPokemoninfo