import { useState } from 'react'
import './App.css'
import Search from './Components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="logo" className='logo' />
        <Search></Search>
      </header>
    </>
  )
}

export default App
