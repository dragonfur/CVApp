import React, { Component } from "react";
import '../stylesheets/DeleteAdd.css'

const AddOrDelete = ({style2, typeButton, onClick, id, text}) => {
    return (
        <div style={{ ...AddOrDeleteStyle, ...style2 }} className={typeButton} onClick={onClick} id={id}
        >{text}</div>
    )
}

const AddOrDeleteStyle = {
    border: 'none',
    textAlign: 'center',
    fontSize: '1.1em',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    cursor: 'pointer',
}

export default AddOrDelete