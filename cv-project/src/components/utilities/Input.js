import React, { Component } from 'react'

const Input = ({type, className, name, id, placeholder, value, onChange}) => {
    return (
        <input 
        type={type} 
        className={className}
        name={name}
        id={id}
        placeholder={placeholder}
        style={
            (type === 'month') ? dateInputStyle : (type === 'checkbox') ? checkboxInputStyle : inputStyle
        }
        value={value} 
        onChange={onChange}></input>
    )
}

const inputStyle = {
    fontSize: '1.1em',
    paddingTop: '.1rem',
    paddingBottom: '.1rem',
    fontFamily: 'sans serif'
}

const dateInputStyle = {
    fontSize: '1.1em',
    paddingTop: '.1rem',
    paddingBottom: '.1rem',
    fontFamily: 'sans serif'
}

const checkboxInputStyle = {
    fontFamily: 'sans serif'
}

export default Input