import React, { Component } from 'react'

const Button = ({buttonClass, onClick, text}) => {
    return (
        <button 
        className={buttonClass} 
        style={buttonStyle} 
        onClick={onClick}>
            {text}
        </button>
    )
}

const buttonStyle = {
    outline: 'none',
    cursor: 'pointer',
    padding: '13px 23px',
    border: 'none',
    width: '100%',
    color: 'white',
    fontSize: '1.1em'
}

export default Button