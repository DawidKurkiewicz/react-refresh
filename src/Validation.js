import React from 'react'
const validation = (props) => {
    let style={
        background:"red"
    }
    let validationMessage = "Text long enough";
    if(props.inputLength <= 5){
        validationMessage = "Text too short"
    } else {
            style={background:"green"}
    }
    return (
        <div style={style} className="Person">
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation