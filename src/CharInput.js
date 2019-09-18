import React from 'react';
import Validation from"./Validation"
const input = (props) => {
    if(props.par.length >= 1 && document.getElementById("paragraph") ){
document.getElementById("paragraph").className="Person"   
 }
    return (
        <div className="Wrapper">
             <input type="text" onChange={props.change} value={props.val}/>
        <p id="paragraph">{props.par}</p>
        <Validation inputLength={props.len}/>
        <div className="Letters">{props.char}</div>

        </div>
    );
};

export default input;