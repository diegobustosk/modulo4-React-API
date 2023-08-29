import { useState, useEffect } from "react"


function MiApi() {
    const [pokemones, setPokemones] = useState([])
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

    useEffect(() => {
      const getPokemon = async () => {
        const response = await fetch(URL)
        const pokemonJSON = await response.json()

        const pokemon = pokemonJSON.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          const poke = await res.json()
          return {
            name: poke.name,
            id: poke.id,
            img: poke.sprites.other.dream_world.front_default
          }
        })
        setPokemones(await Promise.all(pokemon))
        
      } 

      getPokemon()
    }, [])

    return (
      <div className="MiApi">
      {pokemones.map((pokemon) => {
        return(
          <div className="pokemon-card">
            <img className='pokemon-image' src={pokemon.img} alt={pokemon.name}></img>
            <h4> {pokemon.name.toUpperCase()} </h4>
            <h5> {pokemon.id} </h5>
          </div>
        )
      })}
      </div>
    )
  }
  
  export default MiApi
  