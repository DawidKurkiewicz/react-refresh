import React, { Component } from 'react'
import "./Person.css"
import WithClass from "./hoc/WithClass"
class Person extends Component {

    render() {
        const style = {
            backgroundColor: "indigo",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            color: "white",
            display: "block",
            margin: "10px auto"
          };
        return (
            <WithClass classes="Person">              
                <h3 style={{cursor:"pointer"}} onClick={this.props.click}>i'm a {this.props.name} and i am {this.props.age} years old</h3>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <div>
                <button style= {style}onClick={this.props.delete}>delete</button>
                </div>
            </WithClass>
        )
    }
}
export default Person