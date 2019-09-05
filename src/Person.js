import React from 'react'
import "./Person.css"
const person = (props) => {
    return (
        <div className="Person">
            <button onClick={props.delete}>delete</button>
            <h3 onClick={props.click}>i'm a {props.name} and i am {props.age} years old</h3>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person