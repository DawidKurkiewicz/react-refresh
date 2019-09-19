import React from 'react';
import Validation from"./Validation"
const input = (props) => {
    return (
        <div className="Wrapper">
             <input type="text" onChange={props.change} value={props.val}/>
        <p className="Person">{props.par ? props.par : "Text from input..."}</p>
        <Validation inputLength={props.len}/>
        <div className="Letters">{props.char}</div>

        </div>
    );
};

export default input;