import React, { Component } from "react";

class SectionHead extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={sectionHeadStyle}>
                <img src={this.props.myImage} style={imgStyle} />
                {this.props.text}
            </div>
        )
    }
}

const sectionHeadStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '2vmax',
    borderBottom: '1px gray solid',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem'
}

const imgStyle = {
    height: '1.3em',
    padding: '.3rem',
    backgroundColor: 'midnightblue',
    borderRadius: '3px'
}

export default SectionHead