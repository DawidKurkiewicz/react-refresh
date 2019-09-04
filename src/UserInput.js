import React from 'react'
const inputUser = (props) =>{
    return (
    <div className="Person">
    <input type="text" onChange={props.change} value={props.currentName}/>
    </div>
    )
}

export default inputUser