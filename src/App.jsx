import './App.css'
import { NavBar } from './components/NavBar'
import { PokemonProvider } from './components/context/MyContext'
import AppRouter from './components/router/AppRouter'

function App() {


  return (
    <div>
      <PokemonProvider>
        <NavBar />
        <AppRouter />
      </PokemonProvider>
    </div>
  )
}

export default App
