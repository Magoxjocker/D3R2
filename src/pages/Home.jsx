import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <div className='bg-dark bg-gradient'>
        <h2 className='text-center text-white p-2'>Bienvenido Entrenador</h2>
      </div>
      <div className='container-home '>
      <h2 className='bg-dark bg-gradient text-center text-white m-4 p-2 rounded'>Pokedex Primera Generacion</h2>
      <NavLink to='/pokedex'> <img  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d590121-e064-459f-99bd-27cf25d62415/dafne57-ed103009-a482-4125-ae9b-ead71084f705.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkNTkwMTIxLWUwNjQtNDU5Zi05OWJkLTI3Y2YyNWQ2MjQxNVwvZGFmbmU1Ny1lZDEwMzAwOS1hNDgyLTQxMjUtYWU5Yi1lYWQ3MTA4NGY3MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8WlSqjnogNBfpi3B9rVuF7aBKRHvy13MWPdCnsrpOZE" alt="" /></NavLink>

      </div>
    </div>
  )
}

export default Home