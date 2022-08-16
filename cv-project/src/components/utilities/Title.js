import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1 style={TitleStyle}>{this.props.text}</h1>
        )
    }
} 

const TitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginBottom: '0',
}

export default Title