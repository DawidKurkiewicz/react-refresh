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
        userName: "Linda"
      }
    ],
    showPersons: false,
    showUsers: false
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
  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons;
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }
  userNameChangeHandler = () => {
    this.setState({
      users: [
        {
          userName: "Max"
        },
        {
          userName: "Luisa"
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
          userName: "Linda"
        }
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons })
  }
  toggleUsersHandler = () => {
    const doesShowUsers = this.state.showUsers;
    this.setState({ showUsers: !doesShowUsers })
  }

  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let users = null;
    if (!this.state.showUsers) {
      users = (
        <div>
          <UserInput change={this.inputUserNameChangeHandler} currentName={this.state.users[0].userName} />
          {this.state.users.map(user => {
            return <UserOutput userName={user.userName} change={this.userNameChangeHandler} />
          })}
        </div>
      )

    }
    let persons = null;
    if (!this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              name={person.name}
              age={person.age}
              changed={this.nameChangeHandler}
              click={this.switchNameHandler.bind(this, "Mike")}
              delete={()=>this.deletePersonHandler(index)}


            />
          })}
        </div>
      )
        }
      return (
        <div className="App">
          <h1>hello world</h1>
          <h2>its actually works</h2>
          <button style={style}
            onClick={() => this.switchNameHandler("Jerry")}>
            Switch Name
       </button>
          <button style={style}
            onClick={this.togglePersonsHandler}>
            Toggle
       </button>
       {persons}

          <button style={style}
            onClick={this.userNameChangeHandler}>
            change
          </button>
          <button style={style}
            onClick={this.toggleUsersHandler}>
            Toggle
       </button>

          {users}
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