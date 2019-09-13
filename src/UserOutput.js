import React from 'react'
const outputUser = (props) =>{
    return (
    <React.Fragment>
   <p>{props.userName}</p>
   <p>I'm the {props.id} user of this app</p>
   </React.Fragment>
       )
}

export default outputUser
