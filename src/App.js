import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  state = {
    persons: [
      {
        name: "Max", age:24
      },
      {
        name: "Manuel", age:25
      },
      {
        name: "Marc", age:27
      }
    ]
  }
  switchNameHandler = () => {
this.setState({
   persons: [
    {
      name: "Maxymilian", age:25
    },
    {
      name: "Manuel", age:25
    },
    {
      name: "Marc", age:27
    }
  ]
}) 
}
  render() {
    return (
      <div className="App">
       <h1>hello world</h1>
       <h2>its actually works</h2>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My mom name: Eliza</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobby: racing </Person>
      </div>
    );
  }
}

export default App;
