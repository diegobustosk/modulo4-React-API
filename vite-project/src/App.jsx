import { useState } from 'react'
import Search from './Components/Search'
import MiApi from './Components/MiApi'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="logo" className='logo' />
        <Search></Search>
      </header>
      <MiApi/>
    </>
  )
}

export default App
