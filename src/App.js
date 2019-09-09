import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import Validation from"./Validation"
import Char from"./Char"

class App extends Component {
  state = {
    userInput: "",
    persons: [
      {
        name: "Max", age: 24, id: "0"
      },
      {
        name: "Manuel", age: 25, id: "1"
      },
      {
        name: "Marc", age: 27, id: "2"
      }
    ],
    users: [
      {
        userName: "Mike", id: "3"
      },
      {
        userName: "Linda", id: "4"
      }
    ],
    showPersons: false,
    showUsers: false,
  }
  inputChangedHanlder = (event)=>{
    this.setState({userInput: event.target.value})
  }
  deleteCharHandler=(index)=>{
    const text = this.state.userInput.split('')
    text.splice(index, 1);
    const updatedText = text.join('')
    this.setState({ userInput: updatedText })
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 24, id: "0"
        },
        {
          name: "Manuel", age: 25, id: "1"
        },
        {
          name: "Marc", age: 27, id: "2"
        }
      ]
    })
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex]= person
    this.setState({
      persons:persons
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })

  }
  userNameChangeHandler = () => {
    this.setState({
      users: [
        {
          userName: "Max", id: "3"
        },
        {
          userName: "Luisa", id: "4"
        }
      ]
    })
  }
  inputUserNameChangeHandler = (event) => {
    this.setState({
      users: [
        {
          userName: event.target.value, id: "3"
        },
        {
          userName: "Linda", id: "4"
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
    const charList = this.state.userInput.split('').map((char, index) =>{
      return <Char character={char} key={index} clicked={()=>this.deleteCharHandler(index)}/>
    });
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      margin: "10px",
      color: "white"
    };
    let users = null;
    if (!this.state.showUsers) {
      users = (
        <div>
          <button style={style}
            onClick={this.userNameChangeHandler}>
            change
          </button>
          <UserInput change={this.inputUserNameChangeHandler} currentName={this.state.users[0].userName} />
          {this.state.users.map((user, index) => {
            return <UserOutput
              key={index}
              id={index+1}
              userName={user.userName}
              change={this.userNameChangeHandler}
            />
          })}
        </div>
      )
    }
    let persons = null;
    if (!this.state.showPersons) {
      persons = (
        <div>
          <button style={style}
            onClick={() => this.switchNameHandler("Jerry")}>
            Switch Name
       </button>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event)=>this.nameChangeHandler(event, person.id)}
              click={this.switchNameHandler.bind(this, "Mike")}
              delete={() => this.deletePersonHandler(index)}


            />
          })}
        </div>
      );
      style.backgroundColor = "green"
    }
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHanlder} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
        <h1>hello world</h1>
        <h2>its actually works</h2>
        <button style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
       </button>
        <button style={style}
          onClick={this.toggleUsersHandler}>
          Toggle Users
       </button>
        {persons}
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