import React, { Component } from 'react'
import "./Person.css"
class Person extends Component {
    render() {
        return (
            <div className="Person">
                <button onClick={this.props.delete}>delete</button>
                <h3 onClick={this.props.click}>i'm a {this.props.name} and i am {this.props.age} years old</h3>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}
export default Person