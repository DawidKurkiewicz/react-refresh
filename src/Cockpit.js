import React, {useEffect} from 'react';
const cockpit = ( props ) => {
    const style = {
        backgroundColor: "red",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
        margin: "10px",
        color: "white"
      };
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button
            style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;