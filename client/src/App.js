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

    return (
      <div className="App">
        <h1>Players</h1>
       
      </div>
    );
  }

}

export default App;
