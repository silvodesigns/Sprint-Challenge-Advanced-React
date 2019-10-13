import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
    .then( response => response.json())
    .then(data => this.setState({players: data}))
  }

  render(){

    const { players } = this.state;

    return (
      <div className="App">
        <h1 className="title">Players</h1>
        <ul className="player-card">
          {players.map( p => 
          <li key={p.id}>
          
          <p>NAME: {p.name}</p>
          <p>COUNTRY: {p.country}</p>
          <p>SEARCHES: {p.searches}</p>
          
          </li>
          )}
        </ul>
       
      </div>
    );
  }

}

export default App;
