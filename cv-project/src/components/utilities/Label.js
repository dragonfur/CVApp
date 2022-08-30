import React, { Component } from "react";

const Label = ({forId, text, children}) => {
    return (
        <label 
        htmlFor={forId} 
        style={(forId === 'Present') ? presentStyle : LabelStyle}>
            {text}
            {children}
        </label>
    )
}

const LabelStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '40px 150px 1fr',
    alignItems: 'center',
    width: '50%',
    gap: '5px',
}

const presentStyle = {
    display: 'flex',
}

export default Label