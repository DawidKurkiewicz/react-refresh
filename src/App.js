import React, { Component } from 'react';
import './App.css';
import Person from './Person';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import Char from "./Char"
import Cockpit from "./Cockpit"
import CharInput from "./CharInput"
import WithClass from "./hoc/WithClass"
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
    showInput: false,
    showCockpit: true
  }
  inputChangedHanlder = (event) => {
    this.setState({ userInput: event.target.value })
  }
  deleteCharHandler = (index) => {
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
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({
      persons: persons
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
  toggleInputHandler = () => {
    const doesShowInput = this.state.showInput;
    this.setState({ showInput: !doesShowInput })
  }
  toggleCockpitHandler = () => {
    const doesShowCockpit = this.state.showCockpit;
    this.setState({ showCockpit: !doesShowCockpit })
  }
  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)} />
      )
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
    if (this.state.showUsers) {
      users = (
        <div className="Users">
          <button style={style}
            onClick={this.userNameChangeHandler}>
            change
          </button>
          <UserInput change={this.inputUserNameChangeHandler}
            currentName={this.state.users[0].userName} />
          {this.state.users.map((user, index) => {
            return <UserOutput
              key={index}
              id={index + 1}
              userName={user.userName}
              change={this.userNameChangeHandler}
            />
          })}
        </div>
      )
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div className="Persons">
          <button style={style}
            onClick={() => this.switchNameHandler("Jerry")}>
            Switch Name
       </button>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              click={this.switchNameHandler.bind(this, "Mike")}
              delete={() => this.deletePersonHandler(index)}
            />
          })}
        </div>
      );
    }
    let input = this.state.showInput ?
      <CharInput
        change={this.inputChangedHanlder}
        val={this.state.userInput}
        par={this.state.userInput}
        len={this.state.userInput.length}
        char={charList}
      /> : null
    let cockpit = this.state.showCockpit ?
      <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        click={this.toggleUsersHandler}
        toggle={this.toggleInputHandler}
      /> : null
    return (
      <WithClass classes="App">
        <button onClick={this.toggleCockpitHandler} style={style}>Toggle Cockpit</button>
        {cockpit}
        {persons}
        {users}
        {input}
      </WithClass>
    );
  }
}
export default App;
