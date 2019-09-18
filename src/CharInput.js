import React from 'react';
import Validation from"./Validation"
const input = (props) => {
    return (
        <div className="Input, Person">
             <input type="text" onChange={props.change} value={props.val}/>
        <p className="Person">{props.par}</p>
        <Validation inputLength={props.len}/>
        <div className="Letters">{props.char}</div>

        </div>
    );
};

export default input;