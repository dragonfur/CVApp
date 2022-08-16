import React, { Component } from "react";

class Textarea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <textarea maxLength='250' placeholder={this.props.placeholder} rows='4' cols='50' style={TextareaStyle} name={this.props.name} id={this.props.id} onChange={this.props.onChange} className={this.props.className}></textarea>
        )
    }
}

const TextareaStyle = {
    resize: 'none',
    fontSize: '1.1em',
    fontFamily: 'sans serif'
}

export default Textarea 