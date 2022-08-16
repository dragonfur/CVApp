import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button 
            className={this.props.buttonClass} 
            style={buttonStyle} 
            onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
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