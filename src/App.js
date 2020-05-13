import React, { useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleClick = () => {
      console.log('hello');
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
          .then(res => setPokemon(res.data.results))
          .catch(err => console.log(err));
  }
  

  return (
    <div className="App">
      <div>
        <button onClick = {handleClick}>Fetch Pokemon</button>
          {pokemon? pokemon.map((poke, index)=>{
              return (<div key={index}>{poke.name}</div>)
          }) : null
        }
      </div>
    </div>
  );
}

export default App;
