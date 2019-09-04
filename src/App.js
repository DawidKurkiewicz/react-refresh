import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    persons: [
      {
        name: "Max", age: 24
      },
      {
        name: "Manuel", age: 25
      },
      {
        name: "Marc", age: 27
      }
    ],
    users: [
      {
        userName: "Mike"
      },
      {
        userName:"Linda"
      }
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 24
        },
        {
          name: "Manuel", age: 25
        },
        {
          name: "Marc", age: 27
        }
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Max", age: 24
        },
        {
          name: event.target.value, age: 25
        },
        {
          name: "Marc", age: 27
        }
      ]
    })
  }
  userNameChangeHandler = () => {
    this.setState({
      users: [
        {
          userName: "Max"
        },
        {
          userName: "Marc"
        }
      ]
    })
  }
  inputUserNameChangeHandler = (event) => {
    this.setState({
      users: [
        {
          userName: event.target.value
        },
        {
          userName: event.target.value
        }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor:"pointer"
    };
    return (
      <div className="App">
        <h1>hello world</h1>
        <h2>its actually works</h2>
        <button style={style}
          onClick={() => this.switchNameHandler("Jerry")}>Switch Name
       </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Mike")}
          changed={this.nameChangeHandler}>
          My mom name: Eliza
       </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} >
          My hobby: racing
       </Person>
       <button style={style}
          onClick={this.userNameChangeHandler}> change </button>
      <UserInput change={this.inputUserNameChangeHandler} currentName={this.state.users[0].userName}/>
       <UserOutput text={this.state.users[0].userName} change={this.userNameChangeHandler}/>
       <UserOutput text={this.state.users[0].userName} change={this.userNameChangeHandler}/>
       <UserOutput text={this.state.users[0].userName} change={this.userNameChangeHandler}/>
       <UserOutput text={this.state.users[0].userName} change={this.userNameChangeHandler} />

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