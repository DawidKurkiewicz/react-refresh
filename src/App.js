import React, { Component } from 'react';
import Person from './Person';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import Char from "./Char"
import Cockpit from "./Cockpit"
import CharInput from "./CharInput"

import wrapper from "./hoc/wrapper"
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
    showCockpit: true,
    isBlockPersons: false,
    isBlockUsers: false,
    isBlockInput: false,
    showWithClass: true
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
    if (this.state.persons[0]) {
      const persons = [...this.state.persons]
      persons[0].name = newName
      persons[0].age = 24
      persons[0].id = "0"
      this.setState({ persons: persons })
    } else {
      alert("There is no Person to change")
    }

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
    const users = [...this.state.users]
    users[1].userName = "Luisa"
    users[1].id = "4"
    this.setState({ users: users })

  }
  inputUserNameChangeHandler = (event) => {
    const users = [...this.state.users]
    users[0].userName = event.target.value
    users[0].id = "3"
    this.setState({ users: users })
  }
  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons, isBlockPersons: !this.state.isBlockPersons })

  }
  toggleUsersHandler = () => {
    const doesShowUsers = this.state.showUsers;
    this.setState({ showUsers: !doesShowUsers, isBlockUsers: !this.state.isBlockUsers })
  }
  toggleInputHandler = () => {
    const doesShowInput = this.state.showInput;
    this.setState({ showInput: !doesShowInput, isBlockInput: !this.state.isBlockInput })
  }
  toggleCockpitHandler = () => {
    const doesShowCockpit = this.state.showCockpit;
    this.setState({ showCockpit: !doesShowCockpit })
  }
  toggleWithClassHandler = () => {
    const doesShowWithClass = this.state.showWithClass
    this.setState({ showWithClass: !doesShowWithClass })
  }
  personInitialState = () => {
    this.setState({
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
    })
  }
  userInitialState = () => {
    this.setState({
      users: [
        {
          userName: "Mike", id: "3"
        },
        {
          userName: "Linda", id: "4"
        }
      ]
    })
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
      backgroundColor: "maroon",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
      display: "block",
      margin: "10px auto"
    };
    const styleWithoutMargin = {
      backgroundColor: "LightCoral",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
      display: "block",
      margin: "10px"
    };
    const styleWithoutMarginForButtons = {
      backgroundColor: "CadetBlue  ",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
      display: "block",
      margin: "10px"
    };
    const styleWithColorAndMargin = {
      backgroundColor: "LightCoral",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
      display: "block",
      margin: "10px auto"
    };
    let users = null;
    if (this.state.showUsers) {
      users = (
        <div className="Wrapper">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={styleWithoutMarginForButtons}
              onClick={this.userNameChangeHandler}>
              Switch User Name
          </button>
            <button style={styleWithoutMarginForButtons}
              onClick={() => this.userInitialState()}>
              Reset
       </button>
          </div>
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
        <div className="Wrapper">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button style={styleWithoutMarginForButtons}
              onClick={() => this.switchNameHandler("Jerry")}>
              Switch Person Name
       </button>
            <button style={styleWithoutMarginForButtons}
              onClick={() => this.personInitialState()}>
              Reset
       </button>
          </div>
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
      />
      : null
    let operator = (this.state.isBlockPersons || this.state.isBlockUsers || this.state.isBlockInput)
    let withClass = this.state.showWithClass ?
      <div>
        <button onClick={this.toggleCockpitHandler} style={style}>Toggle Cockpit</button>
        {cockpit}
        <div className={operator ? "Block" : "Center"}>
          <button onClick={this.togglePersonsHandler} style={operator ? styleWithColorAndMargin : styleWithoutMargin}>Toggle Persons</button>
          {persons}
          <button onClick={this.toggleUsersHandler} style={operator ? styleWithColorAndMargin : styleWithoutMargin}>Toggle Users</button>
          {users}
          <button onClick={this.toggleInputHandler} style={operator ? styleWithColorAndMargin : styleWithoutMargin}>Toggle Input</button>
          {input}
        </div>
      </div> : null
    return (
      <div>
        <button onClick={this.toggleWithClassHandler} style={style}>Toggle App</button>
        {withClass}
      </div>
    );
  }
}
export default wrapper(App, "App")
