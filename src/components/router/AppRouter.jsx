import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Pokedex from '../../pages/Pokedex'
import Information from '../../pages/Information'


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/information/:id' element={<Information />} />
            </Routes>
        </div>
    )
}

export default AppRouter

//1.32.43//