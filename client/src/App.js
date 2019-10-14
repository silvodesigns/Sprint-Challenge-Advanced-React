import React, {useEffect, useState} from 'react';
import './App.css';


function App(props){

  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    fetchData();
  })

  const fetchData = () => {
    fetch('http://localhost:5000/api/players')
    .then( response => response.json())
    .then(data => setPlayers(data))
  }


  return (
    <div className="App">
      <h1 className="title">Players</h1>
      <ul className="player-card">
          {players.map( p => 
          <li key={p.id}>
      
              <p  className="player-name">NAME: {p.name}</p>
              <p  className="player-country">COUNTRY: {p.country}</p>
              <p  className="player-search">SEARCHES: {p.searches}</p>
          
          </li>
          )}
      </ul>
     
    </div>
  );


  
}

export default App;
