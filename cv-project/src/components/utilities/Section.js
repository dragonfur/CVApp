import React, { Component } from "react";

class Section extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.sectionName} style={    
                (this.props.styleName !== undefined) ? this.props.styleName : sectionStyle
            }>
                {this.props.children}
            </div>    
        )
    }
}

const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}

export default Section