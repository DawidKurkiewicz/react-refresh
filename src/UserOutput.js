import React from 'react'
const outputUser = (props) =>{
    return (
    <div className="Person">
   <p>{props.userName}</p>
   <p>I'm the {props.id} user of this app</p>
    </div>
    )
}

export default outputUser
