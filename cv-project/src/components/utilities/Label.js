import React, { Component } from "react";

class Label extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <label 
            htmlFor={this.props.forId} 
            style={(this.props.forId === 'Present') ? presentStyle : LabelStyle}>
                {this.props.text}
                {this.props.children}
            </label>
        )
    }
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