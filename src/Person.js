import React from 'react'

const person = (props) =>{
    return (
    <div>
    <h3 onClick={props.click}>i'm a {props.name} and i am {props.age} years old</h3>
    <p>{props.children}</p>
    </div>
    )
}

export default person