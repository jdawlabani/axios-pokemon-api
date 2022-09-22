import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res=>{setPokemon(res.data.results)})
    // .then(res=>console.log(res.data.count))
  }, [])
  return (
    <div className="App">
      {pokemon}
    </div>
  );
}

export default App;
