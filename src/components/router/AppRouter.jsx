import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Informacion from '../../pages/Pokedex'
import Pokedex from '../../pages/Pokedex'


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/pokedex' element={<Pokedex />} />
            </Routes>
        </div>
    )
}

export default AppRouter

//1.32.43//