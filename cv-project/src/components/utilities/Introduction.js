import React, { Component } from "react";

class Introduction extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div style={introductionStyle}>
                <h1>{`${this.props.firstName} ${this.props.lastName}`}</h1>
                <h2>{this.props.jobTitle}</h2>
                {this.props.children}
                <div>
                    {this.props.objective}
                </div>
            </div>
        )
    }
}

const introductionStyle = {
    marginLeft: '1rem',
    marginRight: '1rem'
}

export default Introduction