import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(res=>{
      console.log(res.data.results)
      setPokemonData(res.data.results)
      })
    .catch((err) => console.log(err))
  }, [])
  return (
    <div className="App list">
      <h1>Pokemon</h1>
      <ul>
          {pokemonData.map((pokemon, index) =>
          <li key={index}>{pokemon.name}</li>
          )}
      </ul>
    </div>
  );
}

export default App;
