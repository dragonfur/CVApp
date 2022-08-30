import React, { Component } from "react";

const Title = ({ text }) => {
    return (
        <h1 style={TitleStyle}>{text}</h1>
    )
}

const TitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginBottom: '0',
}

export default Title