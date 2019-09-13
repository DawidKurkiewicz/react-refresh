import React, { Component } from 'react'
import "./Person.css"
import WithClass from "./hoc/WithClass"
class Person extends Component {
    render() {
        return (
            <WithClass classes="Person">              
                <h3 onClick={this.props.click}>i'm a {this.props.name} and i am {this.props.age} years old</h3>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <button onClick={this.props.delete}>delete</button>
            </WithClass>
        )
    }
}
export default Person