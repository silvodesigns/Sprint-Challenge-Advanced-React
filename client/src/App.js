import React, {useEffect, useState} from 'react';
import './App.css';
import  useFetch from './useFetch.js'


function App(props){

  const players = useFetch('http://localhost:5000/api/players');

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
