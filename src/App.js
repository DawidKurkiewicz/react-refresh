import React, { Component, useState } from 'react';
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
  switchNameHandler = (newName) => {
this.setState({
   persons: [
    {
      name: newName, age:25
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
       <button onClick={this.switchNameHandler.bind(this, "Jerry")}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
       click={this.switchNameHandler.bind(this, "Mike")}> My mom name: Eliza</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobby: racing 
       </Person>
      </div>
    );
  }
}

export default App;



// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default app;