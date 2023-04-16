import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Informacion from '../../pages/Informacion'


const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='pokemon/:id' element={<Informacion />} />
            </Routes>
        </div>
    )
}

export default AppRouter

//1.32.43//