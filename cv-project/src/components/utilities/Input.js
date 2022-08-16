import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input 
            type={this.props.type} 
            className={this.props.className}
            name={this.props.name}
            id={this.props.id}
            placeholder={this.props.placeholder}
            style={
                (this.props.type === 'month') ? dateInputStyle : (this.props.type === 'checkbox') ? checkboxInputStyle : inputStyle
            }
            value={this.props.value} 
            onChange={this.props.onChange}></input>
        )
    }
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