import React, {useState} from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const handleClick = () => {
      console.log('hello')
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
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
