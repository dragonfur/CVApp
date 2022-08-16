import React, { Component } from "react";
import '../stylesheets/DeleteAdd.css'

class AddOrDelete extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ ...AddOrDeleteStyle, ...this.props.style2 }} className={this.props.typeButton} onClick={this.props.onClick} id={this.props.id}
            >{this.props.text}</div>
        )
    }
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