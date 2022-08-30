import React, { Component } from "react";

const Textarea = ({ placeholder, name, id, onChange, className }) => {
    return (
        <textarea maxLength='250' placeholder={placeholder} rows='4' cols='50' style={TextareaStyle} name={name} id={id} onChange={onChange} className={className}></textarea>
    )
}

const TextareaStyle = {
    resize: 'none',
    fontSize: '1.1em',
    fontFamily: 'sans serif'
}

export default Textarea 